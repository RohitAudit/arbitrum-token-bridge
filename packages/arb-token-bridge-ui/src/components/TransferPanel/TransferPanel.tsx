import { useState, useMemo, useCallback, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useWallet } from '@arbitrum/use-wallet'
import { utils } from 'ethers'
import { isAddress } from 'ethers/lib/utils'
import { useLatest } from 'react-use'

import { useAppState } from '../../state'
import { ConnectionState } from '../../util'
import { Button } from '../common/Button'
import { NetworkSwitchButton } from '../common/NetworkSwitchButton'
import TransactionConfirmationModal, {
  ModalStatus
} from '../TransactionConfirmationModal/TransactionConfirmationModal'
import { TokenImportModal } from '../TokenModal/TokenImportModal'
import { NetworkBox } from './NetworkBox'
import useWithdrawOnly from './useWithdrawOnly'
import {
  useNetworksAndSigners,
  UseNetworksAndSignersStatus
} from '../../hooks/useNetworksAndSigners'
import useL2Approve from './useL2Approve'
import { BigNumber } from 'ethers'
import { ERC20__factory } from '@arbitrum/sdk/dist/lib/abi/factories/ERC20__factory'
import { ArbTokenBridge } from 'token-bridge-sdk'
import { JsonRpcProvider } from '@ethersproject/providers'
import { useETHPrice } from '../../hooks/useETHPrice'
import { useGasPrice } from '../../hooks/useGasPrice'
import { useDialog } from '../common/Dialog'
import { TokenApprovalDialog } from './TokenApprovalDialog'
import { WithdrawalConfirmationDialog } from './WithdrawalConfirmationDialog'
import { LowBalanceDialog } from './LowBalanceDialog'
import { useAppContextDispatch } from '../App/AppContext'

const isAllowedL2 = async (
  arbTokenBridge: ArbTokenBridge,
  l1TokenAddress: string,
  l2TokenAddress: string,
  walletAddress: string,
  amountNeeded: BigNumber,
  l2Provider: JsonRpcProvider
) => {
  const token = ERC20__factory.connect(l2TokenAddress, l2Provider)
  const gatewayAddress = await arbTokenBridge.token.getL2GatewayAddress(
    l1TokenAddress
  )
  return (await token.allowance(walletAddress, gatewayAddress)).gte(
    amountNeeded
  )
}

function useTokenFromSearchParams(): string | undefined {
  const { search } = useLocation()

  const searchParams = new URLSearchParams(search)
  const tokenFromSearchParams = searchParams.get('token')?.toLowerCase()

  if (!tokenFromSearchParams) {
    return undefined
  }

  if (!isAddress(tokenFromSearchParams)) {
    return undefined
  }

  return tokenFromSearchParams
}

enum ImportTokenModalStatus {
  // "IDLE" is here to distinguish between the modal never being opened, and being closed after a user interaction
  IDLE,
  OPEN,
  CLOSED
}

const TransferPanel = (): JSX.Element => {
  const tokenFromSearchParams = useTokenFromSearchParams()

  const [confimationModalStatus, setConfirmationModalStatus] =
    useState<ModalStatus>(ModalStatus.CLOSED)
  const [importTokenModalStatus, setImportTokenModalStatus] =
    useState<ImportTokenModalStatus>(ImportTokenModalStatus.IDLE)

  const {
    app: {
      connectionState,
      changeNetwork,
      selectedToken,
      isDepositMode,
      arbTokenBridgeLoaded,
      arbTokenBridge: { eth, token, bridgeTokens, walletAddress },
      arbTokenBridge,
      warningTokens
    }
  } = useAppState()
  const { provider } = useWallet()
  const latestConnectedProvider = useLatest(provider)
  const dispatch = useAppContextDispatch()

  const networksAndSigners = useNetworksAndSigners()
  const latestNetworksAndSigners = useLatest(networksAndSigners)
  const {
    l1: { network: l1Network },
    l2: { network: l2Network, signer: l2Signer }
  } = networksAndSigners

  const latestEth = useLatest(eth)
  const latestToken = useLatest(token)

  const [transferring, setTransferring] = useState(false)

  const [l1Amount, setL1AmountState] = useState<string>('')
  const [l2Amount, setL2AmountState] = useState<string>('')

  const { shouldDisableDeposit } = useWithdrawOnly()
  const { shouldRequireApprove } = useL2Approve()

  const [
    lowBalanceDialogProps,
    openLowBalanceDialog,
    { didOpen: didOpenLowBalanceDialog }
  ] = useDialog()
  const [tokenApprovalDialogProps, openTokenApprovalDialog] = useDialog()
  const [withdrawalConfirmationDialogProps, openWithdrawalConfirmationDialog] =
    useDialog()

  const { toUSD } = useETHPrice()
  const { l1GasPrice, l2GasPrice } = useGasPrice()

  // TODO: Switch to a value provided by @arbitrum/sdk
  const [estimatedL1Gas, setEstimatedL1Gas] = useState(BigNumber.from(100000))
  // Estimated L1 gas fees, denominated in Ether, represented as a floating point number
  const [estimatedL1GasFees, setEstimatedL1GasFees] = useState(0)

  // TODO: Switch to a value provided by @arbitrum/sdk
  const [estimatedL2Gas, setEstimatedL2Gas] = useState(BigNumber.from(1000000))
  // Estimated L2 gas fees, denominated in Ether, represented as a floating point number
  const [estimatedL2GasFees, setEstimatedL2GasFees] = useState(0)

  // Estimated total gas fees, denominated in Ether, represented as a floating point number
  const estimatedTotalGasFees = useMemo(
    () => estimatedL1GasFees + estimatedL2GasFees,
    [estimatedL1GasFees, estimatedL2GasFees]
  )

  // The amount of funds to bridge over, represented as a floating point number
  const amount = useMemo(() => {
    if (isDepositMode) {
      return parseFloat(l1Amount || '0')
    }

    return parseFloat(l2Amount || '0')
  }, [isDepositMode, l1Amount, l2Amount])

  useEffect(() => {
    setEstimatedL1GasFees(
      parseFloat(utils.formatEther(estimatedL1Gas.mul(l1GasPrice)))
    )
    setEstimatedL2GasFees(
      parseFloat(utils.formatEther(estimatedL2Gas.mul(l2GasPrice)))
    )
  }, [estimatedL1Gas, l1GasPrice, estimatedL2Gas, l2GasPrice])

  useEffect(() => {
    if (importTokenModalStatus !== ImportTokenModalStatus.IDLE) {
      return
    }

    if (
      connectionState === ConnectionState.L1_CONNECTED ||
      connectionState === ConnectionState.L2_CONNECTED
    ) {
      setImportTokenModalStatus(ImportTokenModalStatus.OPEN)
    }
  }, [connectionState, importTokenModalStatus])

  const setl1Amount = (amount: string) => {
    const amountNum = +amount
    return setL1AmountState(
      Number.isNaN(amountNum) || amountNum < 0 ? '0' : amount
    )
  }
  const setl2Amount = (amount: string) => {
    const amountNum = +amount
    return setL2AmountState(
      Number.isNaN(amountNum) || amountNum < 0 ? '0' : amount
    )
  }

  useEffect(() => {
    // This effect runs every time the balance updates, but we want to show the dialog only once
    if (didOpenLowBalanceDialog) {
      return
    }

    if (typeof arbTokenBridge.balances !== 'undefined') {
      const ethBalance = arbTokenBridge.balances.eth.balance

      if (ethBalance) {
        const isMainnet = l1Network?.chainID === 1
        const isLowBalance = ethBalance.lte(utils.parseEther('0.05'))

        if (isMainnet && isDepositMode && isLowBalance) {
          openLowBalanceDialog()
        }
      }
    }
  }, [
    l1Network,
    isDepositMode,
    arbTokenBridge.balances,
    didOpenLowBalanceDialog,
    openLowBalanceDialog
  ])

  const l1Balance = useMemo(() => {
    if (selectedToken) {
      const balanceL1 =
        arbTokenBridge?.balances?.erc20[selectedToken.address]?.balance
      const { decimals } = selectedToken
      if (!balanceL1 || !decimals) {
        return null
      }
      return utils.formatUnits(balanceL1, decimals)
    }
    const ethBalanceL1 = arbTokenBridge?.balances?.eth?.balance
    if (!ethBalanceL1) {
      return null
    }
    return utils.formatUnits(ethBalanceL1, 18)
  }, [selectedToken, arbTokenBridge, bridgeTokens])

  const l2Balance = useMemo(() => {
    if (selectedToken) {
      const balanceL2 =
        arbTokenBridge?.balances?.erc20[selectedToken.address]?.arbChainBalance
      const { decimals } = selectedToken
      if (!balanceL2) {
        return null
      }
      return utils.formatUnits(balanceL2, decimals)
    }
    const ethBalanceL2 = arbTokenBridge?.balances?.eth?.arbChainBalance
    if (!ethBalanceL2) {
      return null
    }
    return utils.formatUnits(ethBalanceL2, 18)
  }, [selectedToken, arbTokenBridge, bridgeTokens])

  const isBridgingANewStandardToken = useMemo(() => {
    const isConnected = typeof l1Network !== 'undefined'
    const isUnbridgedToken =
      selectedToken !== null && typeof selectedToken.l2Address === 'undefined'

    return isConnected && isDepositMode && isUnbridgedToken
  }, [l1Network, isDepositMode, selectedToken])

  const showModalOnDeposit = useCallback(() => {
    if (isBridgingANewStandardToken) {
      if (!selectedToken)
        throw new Error('Invalid app state: no selected token')
      setConfirmationModalStatus(ModalStatus.NEW_TOKEN_DEPOSITING)
    } else {
      const isAUserAddedToken =
        selectedToken && selectedToken.listID === undefined
      setConfirmationModalStatus(
        isAUserAddedToken ? ModalStatus.USER_ADDED_DEPOSIT : ModalStatus.DEPOSIT
      )
    }
  }, [isBridgingANewStandardToken, selectedToken])

  const transfer = async () => {
    if (
      latestNetworksAndSigners.current.status !==
      UseNetworksAndSignersStatus.CONNECTED
    ) {
      return
    }

    setTransferring(true)

    try {
      const amount = isDepositMode ? l1Amount : l2Amount

      if (isDepositMode) {
        const warningToken =
          selectedToken && warningTokens[selectedToken.address.toLowerCase()]
        if (warningToken) {
          const description = (() => {
            switch (warningToken.type) {
              case 0:
                return 'a supply rebasing token'
              case 1:
                return 'an interest accruing token'
              default:
                return 'a non-standard ERC20 token'
            }
          })()
          return window.alert(
            `${selectedToken.address} is ${description}; it will likely have unusual behavior when deployed as as standard token to Arbitrum. It is not recommended that you deploy it. (See https://developer.offchainlabs.com/docs/bridging_assets for more info.)`
          )
        }
        if (latestNetworksAndSigners.current.isConnectedToArbitrum) {
          await changeNetwork?.(latestNetworksAndSigners.current.l1.network)

          while (
            latestNetworksAndSigners.current.isConnectedToArbitrum ||
            !latestEth.current ||
            !arbTokenBridgeLoaded
          ) {
            await new Promise(r => setTimeout(r, 100))
          }

          await new Promise(r => setTimeout(r, 3000))
        }

        const l1ChainID = latestNetworksAndSigners.current.l1.network.chainID
        const connectedChainID =
          latestConnectedProvider.current?.network?.chainId
        if (
          !(l1ChainID && connectedChainID && l1ChainID === connectedChainID)
        ) {
          return alert('Network connection issue; contact support')
        }
        if (selectedToken) {
          const { decimals } = selectedToken
          const amountRaw = utils.parseUnits(amount, decimals)

          // check that a registration is not currently in progress
          const l2RoutedAddress = await arbTokenBridge.token.getL2ERC20Address(
            selectedToken.address
          )

          if (
            selectedToken.l2Address &&
            selectedToken.l2Address.toLowerCase() !==
              l2RoutedAddress.toLowerCase()
          ) {
            alert(
              'Depositing is currently suspended for this token as a new gateway is being registered. Please try again later and contact support if this issue persists.'
            )
            return
          }

          const { allowance } = await arbTokenBridge.token.getL1TokenData(
            selectedToken.address
          )

          if (!allowance.gte(amountRaw)) {
            const waitForInput = openTokenApprovalDialog()
            const confirmed = await waitForInput()

            if (!confirmed) {
              return
            }

            await latestToken.current.approve(selectedToken.address)
          }

          await latestToken.current.deposit(selectedToken.address, amountRaw)
        } else {
          const amountRaw = utils.parseUnits(amount, 18)

          await latestEth.current.deposit(amountRaw)
        }
      } else {
        if (!latestNetworksAndSigners.current.isConnectedToArbitrum) {
          await changeNetwork?.(latestNetworksAndSigners.current.l2.network)

          while (
            !latestNetworksAndSigners.current.isConnectedToArbitrum ||
            !latestEth.current ||
            !arbTokenBridgeLoaded
          ) {
            await new Promise(r => setTimeout(r, 100))
          }

          await new Promise(r => setTimeout(r, 3000))
        }

        const l2ChainID = latestNetworksAndSigners.current.l2.network.chainID
        const connectedChainID =
          latestConnectedProvider.current?.network?.chainId
        if (
          !(l2ChainID && connectedChainID && +l2ChainID === connectedChainID)
        ) {
          return alert('Network connection issue; contact support')
        }

        const waitForInput = openWithdrawalConfirmationDialog()
        const confirmed = await waitForInput()

        if (!confirmed) {
          return
        }

        if (selectedToken) {
          const { decimals } = selectedToken
          const amountRaw = utils.parseUnits(amount, decimals)
          if (
            shouldRequireApprove &&
            selectedToken.l2Address &&
            l2Signer?.provider
          ) {
            const allowed = await isAllowedL2(
              arbTokenBridge,
              selectedToken.address,
              selectedToken.l2Address,
              walletAddress,
              amountRaw,
              l2Signer.provider
            )
            if (!allowed) {
              await latestToken.current.approveL2(selectedToken.address)
            }
          }

          await latestToken.current.withdraw(selectedToken.address, amountRaw)
        } else {
          const amountRaw = utils.parseUnits(amount, 18)
          await latestEth.current.withdraw(amountRaw)
        }
      }
    } catch (ex) {
      console.log(ex)
    } finally {
      setTransferring(false)
    }
  }

  const disableDeposit = useMemo(() => {
    const l1AmountNum = +l1Amount
    return (
      shouldDisableDeposit ||
      transferring ||
      l1Amount.trim() === '' ||
      (isDepositMode &&
        !isBridgingANewStandardToken &&
        (!l1AmountNum || !l1Balance || l1AmountNum > +l1Balance)) ||
      // allow 0-amount deposits when bridging new token
      (isDepositMode &&
        isBridgingANewStandardToken &&
        (l1Balance === null || l1AmountNum > +l1Balance))
    )
  }, [transferring, isDepositMode, l1Amount, l1Balance])

  const disableWithdrawal = useMemo(() => {
    const l2AmountNum = +l2Amount

    return (
      (selectedToken &&
        selectedToken.address &&
        selectedToken.address.toLowerCase() ===
          '0x0e192d382a36de7011f795acc4391cd302003606'.toLowerCase()) ||
      (selectedToken &&
        selectedToken.address &&
        selectedToken.address.toLowerCase() ===
          '0x488cc08935458403a0458e45E20c0159c8AB2c92'.toLowerCase()) ||
      transferring ||
      (!isDepositMode &&
        (!l2AmountNum || !l2Balance || l2AmountNum > +l2Balance))
    )
  }, [transferring, isDepositMode, l2Amount, l2Balance, selectedToken])

  const isSummaryVisible = useMemo(() => {
    return !(isDepositMode ? disableDeposit : disableWithdrawal)
  }, [isDepositMode, disableDeposit, disableWithdrawal])

  return (
    <>
      <TokenApprovalDialog
        {...tokenApprovalDialogProps}
        erc20L1Address={selectedToken?.address}
      />

      <WithdrawalConfirmationDialog {...withdrawalConfirmationDialogProps} />

      <LowBalanceDialog {...lowBalanceDialogProps} />

      <div className="shadow-transfer-panel mx-auto flex max-w-screen-lg flex-col space-y-6 bg-white lg:flex-row lg:space-y-0 lg:space-x-6 lg:rounded-xl">
        <div className="lg:min-w-540px flex flex-col px-6 py-6 lg:px-0 lg:pl-6">
          <NetworkBox
            isL1
            amount={l1Amount}
            setAmount={setl1Amount}
            className={isDepositMode ? 'order-1' : 'order-3'}
          />
          <div className="relative order-2 flex h-10 w-full justify-center lg:h-12">
            <div className="relative flex w-full items-center justify-end">
              <div className="absolute left-0 right-0 mx-auto flex items-center justify-center">
                <NetworkSwitchButton />
              </div>
            </div>
          </div>
          <NetworkBox
            isL1={false}
            amount={l2Amount}
            setAmount={setl2Amount}
            className={isDepositMode ? 'order-3' : 'order-1'}
          />
        </div>

        <div className="border-r border-v3-gray-3" />

        <div
          style={
            isSummaryVisible
              ? {}
              : {
                  background: `url(/images/ArbitrumFaded.png)`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }
          }
          className="flex w-full flex-col justify-between bg-v3-gray-3 px-6 py-6 lg:rounded-tr-xl lg:rounded-br-xl lg:bg-white lg:px-0 lg:pr-6"
        >
          <div className="hidden lg:block">
            <span className="text-2xl">Summary</span>
            <div className="h-2" />
          </div>

          {isSummaryVisible ? (
            <>
              <div className="block lg:hidden">
                <span className="text-2xl">Summary</span>
                <div className="h-2" />
              </div>

              <div className="flex flex-col space-y-1 text-lg">
                <div className="flex flex-row justify-between">
                  <span className="w-2/5 font-light text-v3-gray-10">
                    Amount
                  </span>
                  <div className="flex w-3/5 flex-row justify-between">
                    <span className="font-light text-v3-gray-10">
                      {selectedToken ? amount : amount.toFixed(4)}{' '}
                      {selectedToken ? selectedToken.symbol : 'ETH'}
                    </span>
                    {/* Only show USD price for ETH. */}
                    {selectedToken === null && (
                      <span className="font-light text-v3-gray-10">
                        (${toUSD(amount).toLocaleString()})
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="w-2/5 font-light text-v3-gray-10">
                    Total gas
                  </span>
                  <div className="flex flex w-3/5 justify-between">
                    <span className="font-light text-v3-gray-10">
                      {estimatedTotalGasFees.toLocaleString()} ETH
                    </span>
                    <span className="font-light text-v3-gray-10">
                      (${toUSD(estimatedTotalGasFees).toLocaleString()})
                    </span>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="w-2/5 pl-4 font-light text-v3-gray-6">
                    L1 gas
                  </span>
                  <div className="flex w-3/5 flex-row justify-between">
                    <span className="font-light text-v3-gray-6">
                      {estimatedL1GasFees.toLocaleString()} ETH
                    </span>
                    <span className="font-light text-v3-gray-6">
                      (${toUSD(estimatedL1GasFees).toLocaleString()})
                    </span>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="w-2/5 pl-4 font-light text-v3-gray-6">
                    L2 gas
                  </span>
                  <div className="flex w-3/5 flex-row justify-between">
                    <span className="font-light text-v3-gray-6">
                      {estimatedL2GasFees.toLocaleString()} ETH
                    </span>
                    <span className="font-light text-v3-gray-6">
                      (${toUSD(estimatedL2GasFees).toLocaleString()})
                    </span>
                  </div>
                </div>

                {/* Only show totals for ETH. */}
                {selectedToken === null && (
                  <>
                    <div className="h-1" />
                    <div className="border-b border-v3-gray-5 lg:border-v3-gray-3" />
                    <div className="h-1" />
                    <div className="flex flex-row justify-between">
                      <span className="w-2/5">Total</span>
                      <div className="flex w-3/5 flex-row justify-between">
                        <span>
                          {(amount + estimatedTotalGasFees).toLocaleString()}{' '}
                          ETH
                        </span>
                        <span>
                          ($
                          {toUSD(
                            amount + estimatedTotalGasFees
                          ).toLocaleString()}
                          )
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="h-12" />
            </>
          ) : (
            <>
              <div className="min-h-56 hidden text-lg text-v3-gray-7 lg:block">
                <span className="text-xl">
                  Bridging summary will appear here.
                </span>
              </div>
              <div style={{ height: '1px' }} />
            </>
          )}

          {isDepositMode ? (
            <Button
              variant="primary"
              loading={transferring}
              disabled={disableDeposit}
              onClick={transfer}
              className="w-full bg-v3-arbitrum-dark-blue py-4 text-lg lg:text-2xl"
            >
              Move funds to {l2Network?.name}
            </Button>
          ) : (
            <Button
              variant="primary"
              loading={transferring}
              disabled={disableWithdrawal}
              onClick={transfer}
              className="w-full bg-v3-ethereum-dark-purple py-4 text-lg lg:text-2xl"
            >
              Move funds to {l1Network?.name}
            </Button>
          )}
        </div>

        {typeof tokenFromSearchParams !== 'undefined' && (
          <TokenImportModal
            isOpen={importTokenModalStatus === ImportTokenModalStatus.OPEN}
            setIsOpen={() =>
              setImportTokenModalStatus(ImportTokenModalStatus.CLOSED)
            }
            address={tokenFromSearchParams}
          />
        )}

        <TransactionConfirmationModal
          onConfirm={transfer}
          status={confimationModalStatus}
          closeModal={() => setConfirmationModalStatus(ModalStatus.CLOSED)}
          isDepositing={isDepositMode}
          symbol={selectedToken ? selectedToken.symbol : 'Eth'}
          amount={isDepositMode ? l1Amount : l2Amount}
        />
      </div>
    </>
  )
}

export { TransferPanel }
