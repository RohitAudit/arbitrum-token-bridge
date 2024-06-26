import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type NodeStruct = {
    stateHash: BytesLike;
    challengeHash: BytesLike;
    confirmData: BytesLike;
    prevNum: BigNumberish;
    deadlineBlock: BigNumberish;
    noChildConfirmedBeforeBlock: BigNumberish;
    stakerCount: BigNumberish;
    childStakerCount: BigNumberish;
    firstChildBlock: BigNumberish;
    latestChildNumber: BigNumberish;
    createdAtBlock: BigNumberish;
    nodeHash: BytesLike;
};
export type NodeStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
] & {
    stateHash: string;
    challengeHash: string;
    confirmData: string;
    prevNum: BigNumber;
    deadlineBlock: BigNumber;
    noChildConfirmedBeforeBlock: BigNumber;
    stakerCount: BigNumber;
    childStakerCount: BigNumber;
    firstChildBlock: BigNumber;
    latestChildNumber: BigNumber;
    createdAtBlock: BigNumber;
    nodeHash: string;
};
export declare namespace ValidatorUtils {
    type NodeConflictStruct = {
        ty: BigNumberish;
        node1: BigNumberish;
        node2: BigNumberish;
    };
    type NodeConflictStructOutput = [number, BigNumber, BigNumber] & {
        ty: number;
        node1: BigNumber;
        node2: BigNumber;
    };
}
export interface ValidatorUtilsInterface extends utils.Interface {
    contractName: "ValidatorUtils";
    functions: {
        "areUnresolvedNodesLinear(address)": FunctionFragment;
        "checkDecidableNextNode(address)": FunctionFragment;
        "findNodeConflict(address,uint64,uint64,uint256)": FunctionFragment;
        "findStakerConflict(address,address,address,uint256)": FunctionFragment;
        "getStakers(address,uint64,uint64)": FunctionFragment;
        "latestStaked(address,address)": FunctionFragment;
        "refundableStakers(address)": FunctionFragment;
        "requireConfirmable(address)": FunctionFragment;
        "requireRejectable(address)": FunctionFragment;
        "stakedNodes(address,address)": FunctionFragment;
        "timedOutChallenges(address,uint64,uint64)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "areUnresolvedNodesLinear", values: [string]): string;
    encodeFunctionData(functionFragment: "checkDecidableNextNode", values: [string]): string;
    encodeFunctionData(functionFragment: "findNodeConflict", values: [string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "findStakerConflict", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getStakers", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "latestStaked", values: [string, string]): string;
    encodeFunctionData(functionFragment: "refundableStakers", values: [string]): string;
    encodeFunctionData(functionFragment: "requireConfirmable", values: [string]): string;
    encodeFunctionData(functionFragment: "requireRejectable", values: [string]): string;
    encodeFunctionData(functionFragment: "stakedNodes", values: [string, string]): string;
    encodeFunctionData(functionFragment: "timedOutChallenges", values: [string, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "areUnresolvedNodesLinear", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkDecidableNextNode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "findNodeConflict", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "findStakerConflict", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestStaked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refundableStakers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireConfirmable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireRejectable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakedNodes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timedOutChallenges", data: BytesLike): Result;
    events: {};
}
export interface ValidatorUtils extends BaseContract {
    contractName: "ValidatorUtils";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ValidatorUtilsInterface;
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
        areUnresolvedNodesLinear(rollup: string, overrides?: CallOverrides): Promise<[boolean]>;
        checkDecidableNextNode(rollup: string, overrides?: CallOverrides): Promise<[number]>;
        findNodeConflict(rollup: string, node1: BigNumberish, node2: BigNumberish, maxDepth: BigNumberish, overrides?: CallOverrides): Promise<[ValidatorUtils.NodeConflictStructOutput]>;
        findStakerConflict(rollup: string, staker1: string, staker2: string, maxDepth: BigNumberish, overrides?: CallOverrides): Promise<[ValidatorUtils.NodeConflictStructOutput]>;
        getStakers(rollup: string, startIndex: BigNumberish, max: BigNumberish, overrides?: CallOverrides): Promise<[string[], boolean] & {
            hasMore: boolean;
        }>;
        latestStaked(rollup: string, staker: string, overrides?: CallOverrides): Promise<[BigNumber, NodeStructOutput]>;
        refundableStakers(rollup: string, overrides?: CallOverrides): Promise<[string[]]>;
        requireConfirmable(rollup: string, overrides?: CallOverrides): Promise<[void]>;
        requireRejectable(rollup: string, overrides?: CallOverrides): Promise<[void]>;
        stakedNodes(rollup: string, staker: string, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        timedOutChallenges(rollup: string, startIndex: BigNumberish, max: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[], boolean] & {
            hasMore: boolean;
        }>;
    };
    areUnresolvedNodesLinear(rollup: string, overrides?: CallOverrides): Promise<boolean>;
    checkDecidableNextNode(rollup: string, overrides?: CallOverrides): Promise<number>;
    findNodeConflict(rollup: string, node1: BigNumberish, node2: BigNumberish, maxDepth: BigNumberish, overrides?: CallOverrides): Promise<ValidatorUtils.NodeConflictStructOutput>;
    findStakerConflict(rollup: string, staker1: string, staker2: string, maxDepth: BigNumberish, overrides?: CallOverrides): Promise<ValidatorUtils.NodeConflictStructOutput>;
    getStakers(rollup: string, startIndex: BigNumberish, max: BigNumberish, overrides?: CallOverrides): Promise<[string[], boolean] & {
        hasMore: boolean;
    }>;
    latestStaked(rollup: string, staker: string, overrides?: CallOverrides): Promise<[BigNumber, NodeStructOutput]>;
    refundableStakers(rollup: string, overrides?: CallOverrides): Promise<string[]>;
    requireConfirmable(rollup: string, overrides?: CallOverrides): Promise<void>;
    requireRejectable(rollup: string, overrides?: CallOverrides): Promise<void>;
    stakedNodes(rollup: string, staker: string, overrides?: CallOverrides): Promise<BigNumber[]>;
    timedOutChallenges(rollup: string, startIndex: BigNumberish, max: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[], boolean] & {
        hasMore: boolean;
    }>;
    callStatic: {
        areUnresolvedNodesLinear(rollup: string, overrides?: CallOverrides): Promise<boolean>;
        checkDecidableNextNode(rollup: string, overrides?: CallOverrides): Promise<number>;
        findNodeConflict(rollup: string, node1: BigNumberish, node2: BigNumberish, maxDepth: BigNumberish, overrides?: CallOverrides): Promise<ValidatorUtils.NodeConflictStructOutput>;
        findStakerConflict(rollup: string, staker1: string, staker2: string, maxDepth: BigNumberish, overrides?: CallOverrides): Promise<ValidatorUtils.NodeConflictStructOutput>;
        getStakers(rollup: string, startIndex: BigNumberish, max: BigNumberish, overrides?: CallOverrides): Promise<[string[], boolean] & {
            hasMore: boolean;
        }>;
        latestStaked(rollup: string, staker: string, overrides?: CallOverrides): Promise<[BigNumber, NodeStructOutput]>;
        refundableStakers(rollup: string, overrides?: CallOverrides): Promise<string[]>;
        requireConfirmable(rollup: string, overrides?: CallOverrides): Promise<void>;
        requireRejectable(rollup: string, overrides?: CallOverrides): Promise<void>;
        stakedNodes(rollup: string, staker: string, overrides?: CallOverrides): Promise<BigNumber[]>;
        timedOutChallenges(rollup: string, startIndex: BigNumberish, max: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[], boolean] & {
            hasMore: boolean;
        }>;
    };
    filters: {};
    estimateGas: {
        areUnresolvedNodesLinear(rollup: string, overrides?: CallOverrides): Promise<BigNumber>;
        checkDecidableNextNode(rollup: string, overrides?: CallOverrides): Promise<BigNumber>;
        findNodeConflict(rollup: string, node1: BigNumberish, node2: BigNumberish, maxDepth: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        findStakerConflict(rollup: string, staker1: string, staker2: string, maxDepth: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getStakers(rollup: string, startIndex: BigNumberish, max: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        latestStaked(rollup: string, staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        refundableStakers(rollup: string, overrides?: CallOverrides): Promise<BigNumber>;
        requireConfirmable(rollup: string, overrides?: CallOverrides): Promise<BigNumber>;
        requireRejectable(rollup: string, overrides?: CallOverrides): Promise<BigNumber>;
        stakedNodes(rollup: string, staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        timedOutChallenges(rollup: string, startIndex: BigNumberish, max: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        areUnresolvedNodesLinear(rollup: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkDecidableNextNode(rollup: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        findNodeConflict(rollup: string, node1: BigNumberish, node2: BigNumberish, maxDepth: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        findStakerConflict(rollup: string, staker1: string, staker2: string, maxDepth: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakers(rollup: string, startIndex: BigNumberish, max: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestStaked(rollup: string, staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        refundableStakers(rollup: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireConfirmable(rollup: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireRejectable(rollup: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stakedNodes(rollup: string, staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        timedOutChallenges(rollup: string, startIndex: BigNumberish, max: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
