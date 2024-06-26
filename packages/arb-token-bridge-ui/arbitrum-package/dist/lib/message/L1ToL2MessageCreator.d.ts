import { Signer } from '@ethersproject/abstract-signer';
import { Provider } from '@ethersproject/abstract-provider';
import { GasOverrides } from './L1ToL2MessageGasEstimator';
import { L1ContractTransaction } from './L1Transaction';
import { PayableOverrides } from '@ethersproject/contracts';
import { L1ToL2TransactionRequest } from '../dataEntities/transactionRequest';
import { RetryableData } from '../dataEntities/retryableData';
import { OmitTyped, PartialPick } from '../utils/types';
type L1ToL2GasKeys = 'maxSubmissionCost' | 'maxFeePerGas' | 'gasLimit' | 'deposit';
export type L1ToL2MessageGasParams = Pick<RetryableData, L1ToL2GasKeys>;
export type L1ToL2MessageNoGasParams = OmitTyped<RetryableData, L1ToL2GasKeys>;
export type L1ToL2MessageParams = PartialPick<L1ToL2MessageNoGasParams, 'excessFeeRefundAddress' | 'callValueRefundAddress'>;
/**
 * Creates retryable tickets by directly calling the Inbox contract on L1
 */
export declare class L1ToL2MessageCreator {
    readonly l1Signer: Signer;
    constructor(l1Signer: Signer);
    /**
     * Gets a current estimate for the supplied params
     * @param params
     * @param l1Provider
     * @param l2Provider
     * @param retryableGasOverrides
     * @returns
     */
    protected static getTicketEstimate(params: L1ToL2MessageNoGasParams, l1Provider: Provider, l2Provider: Provider, retryableGasOverrides?: GasOverrides): Promise<Pick<RetryableData, L1ToL2GasKeys>>;
    /**
     * Prepare calldata for a call to create a retryable ticket
     * @param params
     * @param estimates
     * @param excessFeeRefundAddress
     * @param callValueRefundAddress
     * @param nativeTokenIsEth
     * @returns
     */
    protected static getTicketCreationRequestCallData(params: L1ToL2MessageParams, estimates: Pick<RetryableData, L1ToL2GasKeys>, excessFeeRefundAddress: string, callValueRefundAddress: string, nativeTokenIsEth: boolean): string;
    /**
     * Generate a transaction request for creating a retryable ticket
     * @param params
     * @param l1Provider
     * @param l2Provider
     * @param options
     * @returns
     */
    static getTicketCreationRequest(params: L1ToL2MessageParams, l1Provider: Provider, l2Provider: Provider, options?: GasOverrides): Promise<L1ToL2TransactionRequest>;
    /**
     * Creates a retryable ticket by directly calling the Inbox contract on L1
     */
    createRetryableTicket(params: (L1ToL2MessageParams & {
        overrides?: PayableOverrides;
    }) | (L1ToL2TransactionRequest & {
        overrides?: PayableOverrides;
    }), l2Provider: Provider, options?: GasOverrides): Promise<L1ContractTransaction>;
}
export {};
