/*
 * Copyright 2021, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-env node */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminErc20Bridger = exports.Erc20Bridger = void 0;
const constants_1 = require("@ethersproject/constants");
const logger_1 = require("@ethersproject/logger");
const ethers_1 = require("ethers");
const L1GatewayRouter__factory_1 = require("../abi/factories/L1GatewayRouter__factory");
const L2GatewayRouter__factory_1 = require("../abi/factories/L2GatewayRouter__factory");
const L1WethGateway__factory_1 = require("../abi/factories/L1WethGateway__factory");
const L2ArbitrumGateway__factory_1 = require("../abi/factories/L2ArbitrumGateway__factory");
const ERC20__factory_1 = require("../abi/factories/ERC20__factory");
const L2GatewayToken__factory_1 = require("../abi/factories/L2GatewayToken__factory");
const ICustomToken__factory_1 = require("../abi/factories/ICustomToken__factory");
const IArbToken__factory_1 = require("../abi/factories/IArbToken__factory");
const L1ToL2MessageGasEstimator_1 = require("../message/L1ToL2MessageGasEstimator");
const signerOrProvider_1 = require("../dataEntities/signerOrProvider");
const networks_1 = require("../dataEntities/networks");
const errors_1 = require("../dataEntities/errors");
const constants_2 = require("../dataEntities/constants");
const eventFetcher_1 = require("../utils/eventFetcher");
const assetBridger_1 = require("./assetBridger");
const L1Transaction_1 = require("../message/L1Transaction");
const L2Transaction_1 = require("../message/L2Transaction");
const transactionRequest_1 = require("../dataEntities/transactionRequest");
const utils_1 = require("ethers/lib/utils");
const retryableData_1 = require("../dataEntities/retryableData");
const lib_1 = require("../utils/lib");
/**
 * Bridger for moving ERC20 tokens back and forth between L1 to L2
 */
class Erc20Bridger extends assetBridger_1.AssetBridger {
    /**
     * Bridger for moving ERC20 tokens back and forth between L1 to L2
     */
    constructor(l2Network) {
        super(l2Network);
    }
    /**
     * Instantiates a new Erc20Bridger from an L2 Provider
     * @param l2Provider
     * @returns
     */
    static async fromProvider(l2Provider) {
        return new Erc20Bridger(await (0, networks_1.getL2Network)(l2Provider));
    }
    /**
     * Get the address of the l1 gateway for this token
     * @param erc20L1Address
     * @param l1Provider
     * @returns
     */
    async getL1GatewayAddress(erc20L1Address, l1Provider) {
        await this.checkL1Network(l1Provider);
        return await L1GatewayRouter__factory_1.L1GatewayRouter__factory.connect(this.l2Network.tokenBridge.l1GatewayRouter, l1Provider).getGateway(erc20L1Address);
    }
    /**
     * Get the address of the l2 gateway for this token
     * @param erc20L1Address
     * @param l2Provider
     * @returns
     */
    async getL2GatewayAddress(erc20L1Address, l2Provider) {
        await this.checkL2Network(l2Provider);
        return await L2GatewayRouter__factory_1.L2GatewayRouter__factory.connect(this.l2Network.tokenBridge.l2GatewayRouter, l2Provider).getGateway(erc20L1Address);
    }
    /**
     * Creates a transaction request for approving the custom gas token to be spent by the relevant gateway on the parent chain
     * @param params
     */
    async getApproveGasTokenRequest(params) {
        if (this.nativeTokenIsEth) {
            throw new Error('chain uses ETH as its native/gas token');
        }
        const txRequest = await this.getApproveTokenRequest(params);
        // just reuse the approve token request but direct it towards the native token contract
        return Object.assign(Object.assign({}, txRequest), { to: this.nativeToken });
    }
    /**
     * Approves the custom gas token to be spent by the relevant gateway on the parent chain
     * @param params
     */
    async approveGasToken(params) {
        if (this.nativeTokenIsEth) {
            throw new Error('chain uses ETH as its native/gas token');
        }
        await this.checkL1Network(params.l1Signer);
        const approveGasTokenRequest = this.isApproveParams(params)
            ? await this.getApproveGasTokenRequest(Object.assign(Object.assign({}, params), { l1Provider: signerOrProvider_1.SignerProviderUtils.getProviderOrThrow(params.l1Signer) }))
            : params.txRequest;
        return params.l1Signer.sendTransaction(Object.assign(Object.assign({}, approveGasTokenRequest), params.overrides));
    }
    /**
     * Get a tx request to approve tokens for deposit to the bridge.
     * The tokens will be approved for the relevant gateway.
     * @param params
     * @returns
     */
    async getApproveTokenRequest(params) {
        // you approve tokens to the gateway that the router will use
        const gatewayAddress = await this.getL1GatewayAddress(params.erc20L1Address, signerOrProvider_1.SignerProviderUtils.getProviderOrThrow(params.l1Provider));
        const iErc20Interface = ERC20__factory_1.ERC20__factory.createInterface();
        const data = iErc20Interface.encodeFunctionData('approve', [
            gatewayAddress,
            params.amount || Erc20Bridger.MAX_APPROVAL,
        ]);
        return {
            to: params.erc20L1Address,
            data,
            value: ethers_1.BigNumber.from(0),
        };
    }
    isApproveParams(params) {
        return params.erc20L1Address != undefined;
    }
    /**
     * Approve tokens for deposit to the bridge. The tokens will be approved for the relevant gateway.
     * @param params
     * @returns
     */
    async approveToken(params) {
        await this.checkL1Network(params.l1Signer);
        const approveRequest = this.isApproveParams(params)
            ? await this.getApproveTokenRequest(Object.assign(Object.assign({}, params), { l1Provider: signerOrProvider_1.SignerProviderUtils.getProviderOrThrow(params.l1Signer) }))
            : params.txRequest;
        return await params.l1Signer.sendTransaction(Object.assign(Object.assign({}, approveRequest), params.overrides));
    }
    /**
     * Get the L2 events created by a withdrawal
     * @param l2Provider
     * @param gatewayAddress
     * @param l1TokenAddress
     * @param fromAddress
     * @param filter
     * @returns
     */
    async getL2WithdrawalEvents(l2Provider, gatewayAddress, filter, l1TokenAddress, fromAddress, toAddress) {
        await this.checkL2Network(l2Provider);
        const eventFetcher = new eventFetcher_1.EventFetcher(l2Provider);
        const events = (await eventFetcher.getEvents(L2ArbitrumGateway__factory_1.L2ArbitrumGateway__factory, contract => contract.filters.WithdrawalInitiated(null, // l1Token
        fromAddress || null, // _from
        toAddress || null // _to
        ), Object.assign(Object.assign({}, filter), { address: gatewayAddress }))).map(a => (Object.assign({ txHash: a.transactionHash }, a.event)));
        return l1TokenAddress
            ? events.filter(log => log.l1Token.toLocaleLowerCase() ===
                l1TokenAddress.toLocaleLowerCase())
            : events;
    }
    /**
     * Does the provided address look like a weth gateway
     * @param potentialWethGatewayAddress
     * @param l1Provider
     * @returns
     */
    async looksLikeWethGateway(potentialWethGatewayAddress, l1Provider) {
        try {
            const potentialWethGateway = L1WethGateway__factory_1.L1WethGateway__factory.connect(potentialWethGatewayAddress, l1Provider);
            await potentialWethGateway.callStatic.l1Weth();
            return true;
        }
        catch (err) {
            if (err instanceof Error &&
                err.code ===
                    logger_1.Logger.errors.CALL_EXCEPTION) {
                return false;
            }
            else {
                throw err;
            }
        }
    }
    /**
     * Is this a known or unknown WETH gateway
     * @param gatewayAddress
     * @param l1Provider
     * @returns
     */
    async isWethGateway(gatewayAddress, l1Provider) {
        const wethAddress = this.l2Network.tokenBridge.l1WethGateway;
        if (this.l2Network.isCustom) {
            // For custom network, we do an ad-hoc check to see if it's a WETH gateway
            if (await this.looksLikeWethGateway(gatewayAddress, l1Provider)) {
                return true;
            }
            // ...otherwise we directly check it against the config file
        }
        else if (wethAddress === gatewayAddress) {
            return true;
        }
        return false;
    }
    /**
     * Get the L2 token contract at the provided address
     * Note: This function just returns a typed ethers object for the provided address, it doesnt
     * check the underlying form of the contract bytecode to see if it's an erc20, and doesn't ensure the validity
     * of any of the underlying functions on that contract.
     * @param l2Provider
     * @param l2TokenAddr
     * @returns
     */
    getL2TokenContract(l2Provider, l2TokenAddr) {
        return L2GatewayToken__factory_1.L2GatewayToken__factory.connect(l2TokenAddr, l2Provider);
    }
    /**
     * Get the L1 token contract at the provided address
     * Note: This function just returns a typed ethers object for the provided address, it doesnt
     * check the underlying form of the contract bytecode to see if it's an erc20, and doesn't ensure the validity
     * of any of the underlying functions on that contract.
     * @param l1Provider
     * @param l1TokenAddr
     * @returns
     */
    getL1TokenContract(l1Provider, l1TokenAddr) {
        return ERC20__factory_1.ERC20__factory.connect(l1TokenAddr, l1Provider);
    }
    /**
     * Get the corresponding L2 for the provided L1 token
     * @param erc20L1Address
     * @param l1Provider
     * @returns
     */
    async getL2ERC20Address(erc20L1Address, l1Provider) {
        await this.checkL1Network(l1Provider);
        const l1GatewayRouter = L1GatewayRouter__factory_1.L1GatewayRouter__factory.connect(this.l2Network.tokenBridge.l1GatewayRouter, l1Provider);
        return await l1GatewayRouter.functions
            .calculateL2TokenAddress(erc20L1Address)
            .then(([res]) => res);
    }
    /**
     * Get the corresponding L1 for the provided L2 token
     * Validates the returned address against the l2 router to ensure it is correctly mapped to the provided erc20L2Address
     * @param erc20L2Address
     * @param l2Provider
     * @returns
     */
    async getL1ERC20Address(erc20L2Address, l2Provider) {
        await this.checkL2Network(l2Provider);
        // L2 WETH contract doesn't have the l1Address method on it
        if (erc20L2Address.toLowerCase() ===
            this.l2Network.tokenBridge.l2Weth.toLowerCase()) {
            return this.l2Network.tokenBridge.l1Weth;
        }
        const arbERC20 = L2GatewayToken__factory_1.L2GatewayToken__factory.connect(erc20L2Address, l2Provider);
        const l1Address = await arbERC20.functions.l1Address().then(([res]) => res);
        // check that this l1 address is indeed registered to this l2 token
        const l2GatewayRouter = L2GatewayRouter__factory_1.L2GatewayRouter__factory.connect(this.l2Network.tokenBridge.l2GatewayRouter, l2Provider);
        const l2Address = await l2GatewayRouter.calculateL2TokenAddress(l1Address);
        if (l2Address.toLowerCase() !== erc20L2Address.toLowerCase()) {
            throw new errors_1.ArbSdkError(`Unexpected l1 address. L1 address from token is not registered to the provided l2 address. ${l1Address} ${l2Address} ${erc20L2Address}`);
        }
        return l1Address;
    }
    /**
     * Whether the token has been disabled on the router
     * @param l1TokenAddress
     * @param l1Provider
     * @returns
     */
    async l1TokenIsDisabled(l1TokenAddress, l1Provider) {
        await this.checkL1Network(l1Provider);
        const l1GatewayRouter = L1GatewayRouter__factory_1.L1GatewayRouter__factory.connect(this.l2Network.tokenBridge.l1GatewayRouter, l1Provider);
        return ((await l1GatewayRouter.l1TokenToGateway(l1TokenAddress)) ===
            constants_2.DISABLED_GATEWAY);
    }
    applyDefaults(params) {
        return Object.assign(Object.assign({}, params), { excessFeeRefundAddress: params.excessFeeRefundAddress || params.from, callValueRefundAddress: params.callValueRefundAddress || params.from, destinationAddress: params.destinationAddress || params.from });
    }
    /**
     * Get the call value for the deposit transaction request
     * @param depositParams
     * @returns
     */
    getDepositRequestCallValue(depositParams) {
        // the call value should be zero when paying with a custom gas token,
        // as the fee amount is packed inside the last parameter (`data`) of the call to `outboundTransfer`, see `getDepositRequestOutboundTransferInnerData`
        if (!this.nativeTokenIsEth) {
            return ethers_1.constants.Zero;
        }
        // we dont include the l2 call value for token deposits because
        // they either have 0 call value, or their call value is withdrawn from
        // a contract by the gateway (weth). So in both of these cases the l2 call value
        // is not actually deposited in the value field
        return depositParams.gasLimit
            .mul(depositParams.maxFeePerGas)
            .add(depositParams.maxSubmissionCost);
    }
    /**
     * Get the `data` param for call to `outboundTransfer`
     * @param depositParams
     * @returns
     */
    getDepositRequestOutboundTransferInnerData(depositParams) {
        if (!this.nativeTokenIsEth) {
            return utils_1.defaultAbiCoder.encode(['uint256', 'bytes', 'uint256'], [
                // maxSubmissionCost
                depositParams.maxSubmissionCost,
                // callHookData
                '0x',
                // nativeTokenTotalFee
                depositParams.gasLimit
                    .mul(depositParams.maxFeePerGas)
                    .add(depositParams.maxSubmissionCost), // will be zero
            ]);
        }
        return utils_1.defaultAbiCoder.encode(['uint256', 'bytes'], [
            // maxSubmissionCost
            depositParams.maxSubmissionCost,
            // callHookData
            '0x',
        ]);
    }
    /**
     * Get the arguments for calling the deposit function
     * @param params
     * @returns
     */
    async getDepositRequest(params) {
        await this.checkL1Network(params.l1Provider);
        await this.checkL2Network(params.l2Provider);
        const defaultedParams = this.applyDefaults(params);
        const { amount, destinationAddress, erc20L1Address, l1Provider, l2Provider, retryableGasOverrides, } = defaultedParams;
        const l1GatewayAddress = await this.getL1GatewayAddress(erc20L1Address, l1Provider);
        let tokenGasOverrides = retryableGasOverrides;
        // we also add a hardcoded minimum gas limit for custom gateway deposits
        if (l1GatewayAddress === this.l2Network.tokenBridge.l1CustomGateway) {
            if (!tokenGasOverrides)
                tokenGasOverrides = {};
            if (!tokenGasOverrides.gasLimit)
                tokenGasOverrides.gasLimit = {};
            if (!tokenGasOverrides.gasLimit.min) {
                tokenGasOverrides.gasLimit.min =
                    Erc20Bridger.MIN_CUSTOM_DEPOSIT_GAS_LIMIT;
            }
        }
        const depositFunc = (depositParams) => {
            depositParams.maxSubmissionCost =
                params.maxSubmissionCost || depositParams.maxSubmissionCost;
            const iGatewayRouter = L1GatewayRouter__factory_1.L1GatewayRouter__factory.createInterface();
            const innerData = this.getDepositRequestOutboundTransferInnerData(depositParams);
            const functionData = defaultedParams.excessFeeRefundAddress !== defaultedParams.from
                ? iGatewayRouter.encodeFunctionData('outboundTransferCustomRefund', [
                    erc20L1Address,
                    defaultedParams.excessFeeRefundAddress,
                    destinationAddress,
                    amount,
                    depositParams.gasLimit,
                    depositParams.maxFeePerGas,
                    innerData,
                ])
                : iGatewayRouter.encodeFunctionData('outboundTransfer', [
                    erc20L1Address,
                    destinationAddress,
                    amount,
                    depositParams.gasLimit,
                    depositParams.maxFeePerGas,
                    innerData,
                ]);
            return {
                data: functionData,
                to: this.l2Network.tokenBridge.l1GatewayRouter,
                from: defaultedParams.from,
                value: this.getDepositRequestCallValue(depositParams),
            };
        };
        const gasEstimator = new L1ToL2MessageGasEstimator_1.L1ToL2MessageGasEstimator(l2Provider);
        const estimates = await gasEstimator.populateFunctionParams(depositFunc, l1Provider, tokenGasOverrides);
        return {
            txRequest: {
                to: this.l2Network.tokenBridge.l1GatewayRouter,
                data: estimates.data,
                value: estimates.value,
                from: params.from,
            },
            retryableData: Object.assign(Object.assign({}, estimates.retryable), estimates.estimates),
            isValid: async () => {
                const reEstimates = await gasEstimator.populateFunctionParams(depositFunc, l1Provider, tokenGasOverrides);
                return L1ToL2MessageGasEstimator_1.L1ToL2MessageGasEstimator.isValid(estimates.estimates, reEstimates.estimates);
            },
        };
    }
    /**
     * Execute a token deposit from L1 to L2
     * @param params
     * @returns
     */
    async deposit(params) {
        var _a;
        await this.checkL1Network(params.l1Signer);
        // Although the types prevent should alert callers that value is not
        // a valid override, it is possible that they pass it in anyway as it's a common override
        // We do a safety check here
        if ((_a = params.overrides) === null || _a === void 0 ? void 0 : _a.value) {
            throw new errors_1.ArbSdkError('L1 call value should be set through l1CallValue param');
        }
        const l1Provider = signerOrProvider_1.SignerProviderUtils.getProviderOrThrow(params.l1Signer);
        const tokenDeposit = (0, transactionRequest_1.isL1ToL2TransactionRequest)(params)
            ? params
            : await this.getDepositRequest(Object.assign(Object.assign({}, params), { l1Provider, from: await params.l1Signer.getAddress() }));
        const tx = await params.l1Signer.sendTransaction(Object.assign(Object.assign({}, tokenDeposit.txRequest), params.overrides));
        return L1Transaction_1.L1TransactionReceipt.monkeyPatchContractCallWait(tx);
    }
    /**
     * Get the arguments for calling the token withdrawal function
     * @param params
     * @returns
     */
    async getWithdrawalRequest(params) {
        const to = params.destinationAddress;
        const routerInterface = L2GatewayRouter__factory_1.L2GatewayRouter__factory.createInterface();
        const functionData = 
        // we need to do this since typechain doesnt seem to correctly create
        // encodeFunctionData for functions with overrides
        routerInterface.encodeFunctionData('outboundTransfer(address,address,uint256,bytes)', [
            params.erc20l1Address,
            to,
            params.amount,
            '0x',
        ]);
        return {
            txRequest: {
                data: functionData,
                to: this.l2Network.tokenBridge.l2GatewayRouter,
                value: ethers_1.BigNumber.from(0),
                from: params.from,
            },
            // todo: do proper estimation
            estimateL1GasLimit: async (l1Provider) => {
                if (await (0, lib_1.isArbitrumChain)(l1Provider)) {
                    // values for L3 are dependent on the L1 base fee, so hardcoding can never be accurate
                    // however, this is only an estimate used for display, so should be good enough
                    //
                    // measured with token withdrawals from Rari then added some padding
                    return ethers_1.BigNumber.from(8000000);
                }
                const l1GatewayAddress = await this.getL1GatewayAddress(params.erc20l1Address, l1Provider);
                // The WETH gateway is the only deposit that requires callvalue in the L2 user-tx (i.e., the recently un-wrapped ETH)
                // Here we check if this is a WETH deposit, and include the callvalue for the gas estimate query if so
                const isWeth = await this.isWethGateway(l1GatewayAddress, l1Provider);
                // measured 157421 - add some padding
                return isWeth ? ethers_1.BigNumber.from(190000) : ethers_1.BigNumber.from(160000);
            },
        };
    }
    /**
     * Withdraw tokens from L2 to L1
     * @param params
     * @returns
     */
    async withdraw(params) {
        if (!signerOrProvider_1.SignerProviderUtils.signerHasProvider(params.l2Signer)) {
            throw new errors_1.MissingProviderArbSdkError('l2Signer');
        }
        await this.checkL2Network(params.l2Signer);
        const withdrawalRequest = (0, transactionRequest_1.isL2ToL1TransactionRequest)(params)
            ? params
            : await this.getWithdrawalRequest(Object.assign(Object.assign({}, params), { from: await params.l2Signer.getAddress() }));
        const tx = await params.l2Signer.sendTransaction(Object.assign(Object.assign({}, withdrawalRequest.txRequest), params.overrides));
        return L2Transaction_1.L2TransactionReceipt.monkeyPatchWait(tx);
    }
}
exports.Erc20Bridger = Erc20Bridger;
Erc20Bridger.MAX_APPROVAL = constants_1.MaxUint256;
Erc20Bridger.MIN_CUSTOM_DEPOSIT_GAS_LIMIT = ethers_1.BigNumber.from(275000);
/**
 * Admin functionality for the token bridge
 */
class AdminErc20Bridger extends Erc20Bridger {
    /**
     * Register a custom token on the Arbitrum bridge
     * See https://developer.offchainlabs.com/docs/bridging_assets#the-arbitrum-generic-custom-gateway for more details
     * @param l1TokenAddress Address of the already deployed l1 token. Must inherit from https://developer.offchainlabs.com/docs/sol_contract_docs/md_docs/arb-bridge-peripherals/tokenbridge/ethereum/icustomtoken.
     * @param l2TokenAddress Address of the already deployed l2 token. Must inherit from https://developer.offchainlabs.com/docs/sol_contract_docs/md_docs/arb-bridge-peripherals/tokenbridge/arbitrum/iarbtoken.
     * @param l1Signer The signer with the rights to call registerTokenOnL2 on the l1 token
     * @param l2Provider Arbitrum rpc provider
     * @returns
     */
    async registerCustomToken(l1TokenAddress, l2TokenAddress, l1Signer, l2Provider) {
        if (!signerOrProvider_1.SignerProviderUtils.signerHasProvider(l1Signer)) {
            throw new errors_1.MissingProviderArbSdkError('l1Signer');
        }
        await this.checkL1Network(l1Signer);
        await this.checkL2Network(l2Provider);
        const l1SenderAddress = await l1Signer.getAddress();
        const l1Token = ICustomToken__factory_1.ICustomToken__factory.connect(l1TokenAddress, l1Signer);
        const l2Token = IArbToken__factory_1.IArbToken__factory.connect(l2TokenAddress, l2Provider);
        // sanity checks
        await l1Token.deployed();
        await l2Token.deployed();
        const l1AddressFromL2 = await l2Token.l1Address();
        if (l1AddressFromL2 !== l1TokenAddress) {
            throw new errors_1.ArbSdkError(`L2 token does not have l1 address set. Set address: ${l1AddressFromL2}, expected address: ${l1TokenAddress}.`);
        }
        const from = await l1Signer.getAddress();
        const encodeFuncData = (setTokenGas, setGatewayGas, maxFeePerGas) => {
            // if we set maxFeePerGas to be the error triggering param then it will
            // always trigger for the setToken call and never make it ti setGateways
            // so we here we just use the gas limit to trigger retryable data
            const doubleFeePerGas = maxFeePerGas.eq(retryableData_1.RetryableDataTools.ErrorTriggeringParams.maxFeePerGas)
                ? retryableData_1.RetryableDataTools.ErrorTriggeringParams.maxFeePerGas.mul(2)
                : maxFeePerGas;
            const setTokenDeposit = setTokenGas.gasLimit
                .mul(doubleFeePerGas)
                .add(setTokenGas.maxSubmissionCost);
            const setGatewayDeposit = setGatewayGas.gasLimit
                .mul(doubleFeePerGas)
                .add(setGatewayGas.maxSubmissionCost);
            const data = l1Token.interface.encodeFunctionData('registerTokenOnL2', [
                l2TokenAddress,
                setTokenGas.maxSubmissionCost,
                setGatewayGas.maxSubmissionCost,
                setTokenGas.gasLimit,
                setGatewayGas.gasLimit,
                doubleFeePerGas,
                setTokenDeposit,
                setGatewayDeposit,
                l1SenderAddress,
            ]);
            return {
                data,
                value: setTokenDeposit.add(setGatewayDeposit),
                to: l1Token.address,
                from,
            };
        };
        const l1Provider = l1Signer.provider;
        const gEstimator = new L1ToL2MessageGasEstimator_1.L1ToL2MessageGasEstimator(l2Provider);
        const setTokenEstimates2 = await gEstimator.populateFunctionParams((params) => encodeFuncData({
            gasLimit: params.gasLimit,
            maxSubmissionCost: params.maxSubmissionCost,
        }, {
            gasLimit: retryableData_1.RetryableDataTools.ErrorTriggeringParams.gasLimit,
            maxSubmissionCost: ethers_1.BigNumber.from(1),
        }, params.maxFeePerGas), l1Provider);
        const setGatewayEstimates2 = await gEstimator.populateFunctionParams((params) => encodeFuncData({
            gasLimit: setTokenEstimates2.estimates.gasLimit,
            maxSubmissionCost: setTokenEstimates2.estimates.maxSubmissionCost,
        }, {
            gasLimit: params.gasLimit,
            maxSubmissionCost: params.maxSubmissionCost,
        }, params.maxFeePerGas), l1Provider);
        const registerTx = await l1Signer.sendTransaction({
            to: l1Token.address,
            data: setGatewayEstimates2.data,
            value: setGatewayEstimates2.value,
        });
        return L1Transaction_1.L1TransactionReceipt.monkeyPatchWait(registerTx);
    }
    /**
     * Get all the gateway set events on the L1 gateway router
     * @param l1Provider
     * @param customNetworkL1GatewayRouter
     * @returns
     */
    async getL1GatewaySetEvents(l1Provider, filter) {
        await this.checkL1Network(l1Provider);
        const l1GatewayRouterAddress = this.l2Network.tokenBridge.l1GatewayRouter;
        const eventFetcher = new eventFetcher_1.EventFetcher(l1Provider);
        return (await eventFetcher.getEvents(L1GatewayRouter__factory_1.L1GatewayRouter__factory, t => t.filters.GatewaySet(), Object.assign(Object.assign({}, filter), { address: l1GatewayRouterAddress }))).map(a => a.event);
    }
    /**
     * Get all the gateway set events on the L2 gateway router
     * @param l1Provider
     * @param customNetworkL1GatewayRouter
     * @returns
     */
    async getL2GatewaySetEvents(l2Provider, filter, customNetworkL2GatewayRouter) {
        if (this.l2Network.isCustom && !customNetworkL2GatewayRouter) {
            throw new errors_1.ArbSdkError('Must supply customNetworkL2GatewayRouter for custom network ');
        }
        await this.checkL2Network(l2Provider);
        const l2GatewayRouterAddress = customNetworkL2GatewayRouter || this.l2Network.tokenBridge.l2GatewayRouter;
        const eventFetcher = new eventFetcher_1.EventFetcher(l2Provider);
        return (await eventFetcher.getEvents(L1GatewayRouter__factory_1.L1GatewayRouter__factory, t => t.filters.GatewaySet(), Object.assign(Object.assign({}, filter), { address: l2GatewayRouterAddress }))).map(a => a.event);
    }
    /**
     * Register the provided token addresses against the provided gateways
     * @param l1Signer
     * @param l2Provider
     * @param tokenGateways
     * @returns
     */
    async setGateways(l1Signer, l2Provider, tokenGateways, options) {
        if (!signerOrProvider_1.SignerProviderUtils.signerHasProvider(l1Signer)) {
            throw new errors_1.MissingProviderArbSdkError('l1Signer');
        }
        await this.checkL1Network(l1Signer);
        await this.checkL2Network(l2Provider);
        const from = await l1Signer.getAddress();
        const l1GatewayRouter = L1GatewayRouter__factory_1.L1GatewayRouter__factory.connect(this.l2Network.tokenBridge.l1GatewayRouter, l1Signer);
        const setGatewaysFunc = (params) => {
            return {
                data: l1GatewayRouter.interface.encodeFunctionData('setGateways', [
                    tokenGateways.map(tG => tG.tokenAddr),
                    tokenGateways.map(tG => tG.gatewayAddr),
                    params.gasLimit,
                    params.maxFeePerGas,
                    params.maxSubmissionCost,
                ]),
                from,
                value: params.gasLimit
                    .mul(params.maxFeePerGas)
                    .add(params.maxSubmissionCost),
                to: l1GatewayRouter.address,
            };
        };
        const gEstimator = new L1ToL2MessageGasEstimator_1.L1ToL2MessageGasEstimator(l2Provider);
        const estimates = await gEstimator.populateFunctionParams(setGatewaysFunc, l1Signer.provider, options);
        const res = await l1Signer.sendTransaction({
            to: estimates.to,
            data: estimates.data,
            value: estimates.estimates.deposit,
        });
        return L1Transaction_1.L1TransactionReceipt.monkeyPatchContractCallWait(res);
    }
}
exports.AdminErc20Bridger = AdminErc20Bridger;
