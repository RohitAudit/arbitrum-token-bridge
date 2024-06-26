import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ArbosActsInterface extends utils.Interface {
    contractName: "ArbosActs";
    functions: {
        "batchPostingReport(uint256,address,uint64,uint64,uint256)": FunctionFragment;
        "startBlock(uint256,uint64,uint64,uint64)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "batchPostingReport", values: [BigNumberish, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "startBlock", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "batchPostingReport", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBlock", data: BytesLike): Result;
    events: {};
}
export interface ArbosActs extends BaseContract {
    contractName: "ArbosActs";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ArbosActsInterface;
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
        batchPostingReport(batchTimestamp: BigNumberish, batchPosterAddress: string, batchNumber: BigNumberish, batchDataGas: BigNumberish, l1BaseFeeWei: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        startBlock(l1BaseFee: BigNumberish, l1BlockNumber: BigNumberish, l2BlockNumber: BigNumberish, timePassed: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    batchPostingReport(batchTimestamp: BigNumberish, batchPosterAddress: string, batchNumber: BigNumberish, batchDataGas: BigNumberish, l1BaseFeeWei: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    startBlock(l1BaseFee: BigNumberish, l1BlockNumber: BigNumberish, l2BlockNumber: BigNumberish, timePassed: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        batchPostingReport(batchTimestamp: BigNumberish, batchPosterAddress: string, batchNumber: BigNumberish, batchDataGas: BigNumberish, l1BaseFeeWei: BigNumberish, overrides?: CallOverrides): Promise<void>;
        startBlock(l1BaseFee: BigNumberish, l1BlockNumber: BigNumberish, l2BlockNumber: BigNumberish, timePassed: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        batchPostingReport(batchTimestamp: BigNumberish, batchPosterAddress: string, batchNumber: BigNumberish, batchDataGas: BigNumberish, l1BaseFeeWei: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        startBlock(l1BaseFee: BigNumberish, l1BlockNumber: BigNumberish, l2BlockNumber: BigNumberish, timePassed: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        batchPostingReport(batchTimestamp: BigNumberish, batchPosterAddress: string, batchNumber: BigNumberish, batchDataGas: BigNumberish, l1BaseFeeWei: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        startBlock(l1BaseFee: BigNumberish, l1BlockNumber: BigNumberish, l2BlockNumber: BigNumberish, timePassed: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
