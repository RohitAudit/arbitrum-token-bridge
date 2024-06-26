import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface RetryableTicketCreatorInterface extends utils.Interface {
    contractName: "RetryableTicketCreator";
    functions: {
        "createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "createRetryableTicket", values: [
        string,
        BigNumberish,
        BigNumberish,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "createRetryableTicket", data: BytesLike): Result;
    events: {};
}
export interface RetryableTicketCreator extends BaseContract {
    contractName: "RetryableTicketCreator";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RetryableTicketCreatorInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        createRetryableTicket(destAddr: string, l2CallValue: BigNumberish, maxSubmissionCost: BigNumberish, excessFeeRefundAddress: string, callValueRefundAddress: string, maxGas: BigNumberish, gasPriceBid: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    createRetryableTicket(destAddr: string, l2CallValue: BigNumberish, maxSubmissionCost: BigNumberish, excessFeeRefundAddress: string, callValueRefundAddress: string, maxGas: BigNumberish, gasPriceBid: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        createRetryableTicket(destAddr: string, l2CallValue: BigNumberish, maxSubmissionCost: BigNumberish, excessFeeRefundAddress: string, callValueRefundAddress: string, maxGas: BigNumberish, gasPriceBid: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        createRetryableTicket(destAddr: string, l2CallValue: BigNumberish, maxSubmissionCost: BigNumberish, excessFeeRefundAddress: string, callValueRefundAddress: string, maxGas: BigNumberish, gasPriceBid: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createRetryableTicket(destAddr: string, l2CallValue: BigNumberish, maxSubmissionCost: BigNumberish, excessFeeRefundAddress: string, callValueRefundAddress: string, maxGas: BigNumberish, gasPriceBid: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
