import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type ExecutionContextStruct = {
    maxInboxMessagesRead: BigNumberish;
    bridge: string;
};
export type ExecutionContextStructOutput = [BigNumber, string] & {
    maxInboxMessagesRead: BigNumber;
    bridge: string;
};
export interface OneStepProofEntryInterface extends utils.Interface {
    contractName: "OneStepProofEntry";
    functions: {
        "proveOneStep((uint256,address),uint256,bytes32,bytes)": FunctionFragment;
        "prover0()": FunctionFragment;
        "proverHostIo()": FunctionFragment;
        "proverMath()": FunctionFragment;
        "proverMem()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "proveOneStep", values: [ExecutionContextStruct, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "prover0", values?: undefined): string;
    encodeFunctionData(functionFragment: "proverHostIo", values?: undefined): string;
    encodeFunctionData(functionFragment: "proverMath", values?: undefined): string;
    encodeFunctionData(functionFragment: "proverMem", values?: undefined): string;
    decodeFunctionResult(functionFragment: "proveOneStep", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prover0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proverHostIo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proverMath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proverMem", data: BytesLike): Result;
    events: {};
}
export interface OneStepProofEntry extends BaseContract {
    contractName: "OneStepProofEntry";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OneStepProofEntryInterface;
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
        proveOneStep(execCtx: ExecutionContextStruct, machineStep: BigNumberish, beforeHash: BytesLike, proof: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            afterHash: string;
        }>;
        prover0(overrides?: CallOverrides): Promise<[string]>;
        proverHostIo(overrides?: CallOverrides): Promise<[string]>;
        proverMath(overrides?: CallOverrides): Promise<[string]>;
        proverMem(overrides?: CallOverrides): Promise<[string]>;
    };
    proveOneStep(execCtx: ExecutionContextStruct, machineStep: BigNumberish, beforeHash: BytesLike, proof: BytesLike, overrides?: CallOverrides): Promise<string>;
    prover0(overrides?: CallOverrides): Promise<string>;
    proverHostIo(overrides?: CallOverrides): Promise<string>;
    proverMath(overrides?: CallOverrides): Promise<string>;
    proverMem(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        proveOneStep(execCtx: ExecutionContextStruct, machineStep: BigNumberish, beforeHash: BytesLike, proof: BytesLike, overrides?: CallOverrides): Promise<string>;
        prover0(overrides?: CallOverrides): Promise<string>;
        proverHostIo(overrides?: CallOverrides): Promise<string>;
        proverMath(overrides?: CallOverrides): Promise<string>;
        proverMem(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        proveOneStep(execCtx: ExecutionContextStruct, machineStep: BigNumberish, beforeHash: BytesLike, proof: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        prover0(overrides?: CallOverrides): Promise<BigNumber>;
        proverHostIo(overrides?: CallOverrides): Promise<BigNumber>;
        proverMath(overrides?: CallOverrides): Promise<BigNumber>;
        proverMem(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        proveOneStep(execCtx: ExecutionContextStruct, machineStep: BigNumberish, beforeHash: BytesLike, proof: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        prover0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proverHostIo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proverMath(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proverMem(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
