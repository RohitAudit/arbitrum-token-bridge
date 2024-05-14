import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type GlobalStateStruct = {
    bytes32Vals: [BytesLike, BytesLike];
    u64Vals: [BigNumberish, BigNumberish];
};
export type GlobalStateStructOutput = [
    [
        string,
        string
    ],
    [
        BigNumber,
        BigNumber
    ]
] & {
    bytes32Vals: [string, string];
    u64Vals: [BigNumber, BigNumber];
};
export type ExecutionStateStruct = {
    globalState: GlobalStateStruct;
    machineStatus: BigNumberish;
};
export type ExecutionStateStructOutput = [GlobalStateStructOutput, number] & {
    globalState: GlobalStateStructOutput;
    machineStatus: number;
};
export type AssertionStruct = {
    beforeState: ExecutionStateStruct;
    afterState: ExecutionStateStruct;
    numBlocks: BigNumberish;
};
export type AssertionStructOutput = [
    ExecutionStateStructOutput,
    ExecutionStateStructOutput,
    BigNumber
] & {
    beforeState: ExecutionStateStructOutput;
    afterState: ExecutionStateStructOutput;
    numBlocks: BigNumber;
};
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
export type ConfigStruct = {
    confirmPeriodBlocks: BigNumberish;
    extraChallengeTimeBlocks: BigNumberish;
    stakeToken: string;
    baseStake: BigNumberish;
    wasmModuleRoot: BytesLike;
    owner: string;
    loserStakeEscrow: string;
    chainId: BigNumberish;
    chainConfig: string;
    genesisBlockNum: BigNumberish;
    sequencerInboxMaxTimeVariation: ISequencerInbox.MaxTimeVariationStruct;
};
export type ConfigStructOutput = [
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    ISequencerInbox.MaxTimeVariationStructOutput
] & {
    confirmPeriodBlocks: BigNumber;
    extraChallengeTimeBlocks: BigNumber;
    stakeToken: string;
    baseStake: BigNumber;
    wasmModuleRoot: string;
    owner: string;
    loserStakeEscrow: string;
    chainId: BigNumber;
    chainConfig: string;
    genesisBlockNum: BigNumber;
    sequencerInboxMaxTimeVariation: ISequencerInbox.MaxTimeVariationStructOutput;
};
export type ContractDependenciesStruct = {
    bridge: string;
    sequencerInbox: string;
    inbox: string;
    outbox: string;
    rollupEventInbox: string;
    challengeManager: string;
    rollupAdminLogic: string;
    rollupUserLogic: string;
    validatorUtils: string;
    validatorWalletCreator: string;
};
export type ContractDependenciesStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
] & {
    bridge: string;
    sequencerInbox: string;
    inbox: string;
    outbox: string;
    rollupEventInbox: string;
    challengeManager: string;
    rollupAdminLogic: string;
    rollupUserLogic: string;
    validatorUtils: string;
    validatorWalletCreator: string;
};
export declare namespace IRollupCore {
    type StakerStruct = {
        amountStaked: BigNumberish;
        index: BigNumberish;
        latestStakedNode: BigNumberish;
        currentChallenge: BigNumberish;
        isStaked: boolean;
    };
    type StakerStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        amountStaked: BigNumber;
        index: BigNumber;
        latestStakedNode: BigNumber;
        currentChallenge: BigNumber;
        isStaked: boolean;
    };
}
export declare namespace ISequencerInbox {
    type MaxTimeVariationStruct = {
        delayBlocks: BigNumberish;
        futureBlocks: BigNumberish;
        delaySeconds: BigNumberish;
        futureSeconds: BigNumberish;
    };
    type MaxTimeVariationStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        delayBlocks: BigNumber;
        futureBlocks: BigNumber;
        delaySeconds: BigNumber;
        futureSeconds: BigNumber;
    };
}
export interface RollupAdminLogicInterface extends utils.Interface {
    contractName: "RollupAdminLogic";
    functions: {
        "_stakerMap(address)": FunctionFragment;
        "amountStaked(address)": FunctionFragment;
        "baseStake()": FunctionFragment;
        "bridge()": FunctionFragment;
        "chainId()": FunctionFragment;
        "challengeManager()": FunctionFragment;
        "confirmPeriodBlocks()": FunctionFragment;
        "createNitroMigrationGenesis((((bytes32[2],uint64[2]),uint8),((bytes32[2],uint64[2]),uint8),uint64))": FunctionFragment;
        "currentChallenge(address)": FunctionFragment;
        "extraChallengeTimeBlocks()": FunctionFragment;
        "firstUnresolvedNode()": FunctionFragment;
        "forceConfirmNode(uint64,bytes32,bytes32)": FunctionFragment;
        "forceCreateNode(uint64,uint256,(((bytes32[2],uint64[2]),uint8),((bytes32[2],uint64[2]),uint8),uint64),bytes32)": FunctionFragment;
        "forceRefundStaker(address[])": FunctionFragment;
        "forceResolveChallenge(address[],address[])": FunctionFragment;
        "getNode(uint64)": FunctionFragment;
        "getNodeCreationBlockForLogLookup(uint64)": FunctionFragment;
        "getStaker(address)": FunctionFragment;
        "getStakerAddress(uint64)": FunctionFragment;
        "inbox()": FunctionFragment;
        "initialize((uint64,uint64,address,uint256,bytes32,address,address,uint256,string,uint64,(uint256,uint256,uint256,uint256)),(address,address,address,address,address,address,address,address,address,address))": FunctionFragment;
        "isStaked(address)": FunctionFragment;
        "isStakedOnLatestConfirmed(address)": FunctionFragment;
        "isValidator(address)": FunctionFragment;
        "isZombie(address)": FunctionFragment;
        "lastStakeBlock()": FunctionFragment;
        "latestConfirmed()": FunctionFragment;
        "latestNodeCreated()": FunctionFragment;
        "latestStakedNode(address)": FunctionFragment;
        "loserStakeEscrow()": FunctionFragment;
        "minimumAssertionPeriod()": FunctionFragment;
        "nodeHasStaker(uint64,address)": FunctionFragment;
        "outbox()": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "removeOldOutbox(address)": FunctionFragment;
        "resume()": FunctionFragment;
        "rollupDeploymentBlock()": FunctionFragment;
        "rollupEventInbox()": FunctionFragment;
        "sequencerInbox()": FunctionFragment;
        "setBaseStake(uint256)": FunctionFragment;
        "setConfirmPeriodBlocks(uint64)": FunctionFragment;
        "setDelayedInbox(address,bool)": FunctionFragment;
        "setExtraChallengeTimeBlocks(uint64)": FunctionFragment;
        "setInbox(address)": FunctionFragment;
        "setLoserStakeEscrow(address)": FunctionFragment;
        "setMinimumAssertionPeriod(uint256)": FunctionFragment;
        "setOutbox(address)": FunctionFragment;
        "setOwner(address)": FunctionFragment;
        "setSequencerInbox(address)": FunctionFragment;
        "setStakeToken(address)": FunctionFragment;
        "setValidator(address[],bool[])": FunctionFragment;
        "setValidatorWhitelistDisabled(bool)": FunctionFragment;
        "setWasmModuleRoot(bytes32)": FunctionFragment;
        "stakeToken()": FunctionFragment;
        "stakerCount()": FunctionFragment;
        "totalWithdrawableFunds()": FunctionFragment;
        "upgradeBeacon(address,address)": FunctionFragment;
        "upgradeSecondaryTo(address)": FunctionFragment;
        "upgradeSecondaryToAndCall(address,bytes)": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "validatorUtils()": FunctionFragment;
        "validatorWalletCreator()": FunctionFragment;
        "validatorWhitelistDisabled()": FunctionFragment;
        "wasmModuleRoot()": FunctionFragment;
        "withdrawableFunds(address)": FunctionFragment;
        "zombieAddress(uint256)": FunctionFragment;
        "zombieCount()": FunctionFragment;
        "zombieLatestStakedNode(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "_stakerMap", values: [string]): string;
    encodeFunctionData(functionFragment: "amountStaked", values: [string]): string;
    encodeFunctionData(functionFragment: "baseStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "challengeManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmPeriodBlocks", values?: undefined): string;
    encodeFunctionData(functionFragment: "createNitroMigrationGenesis", values: [AssertionStruct]): string;
    encodeFunctionData(functionFragment: "currentChallenge", values: [string]): string;
    encodeFunctionData(functionFragment: "extraChallengeTimeBlocks", values?: undefined): string;
    encodeFunctionData(functionFragment: "firstUnresolvedNode", values?: undefined): string;
    encodeFunctionData(functionFragment: "forceConfirmNode", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "forceCreateNode", values: [BigNumberish, BigNumberish, AssertionStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "forceRefundStaker", values: [string[]]): string;
    encodeFunctionData(functionFragment: "forceResolveChallenge", values: [string[], string[]]): string;
    encodeFunctionData(functionFragment: "getNode", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getNodeCreationBlockForLogLookup", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getStaker", values: [string]): string;
    encodeFunctionData(functionFragment: "getStakerAddress", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "inbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [ConfigStruct, ContractDependenciesStruct]): string;
    encodeFunctionData(functionFragment: "isStaked", values: [string]): string;
    encodeFunctionData(functionFragment: "isStakedOnLatestConfirmed", values: [string]): string;
    encodeFunctionData(functionFragment: "isValidator", values: [string]): string;
    encodeFunctionData(functionFragment: "isZombie", values: [string]): string;
    encodeFunctionData(functionFragment: "lastStakeBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "latestConfirmed", values?: undefined): string;
    encodeFunctionData(functionFragment: "latestNodeCreated", values?: undefined): string;
    encodeFunctionData(functionFragment: "latestStakedNode", values: [string]): string;
    encodeFunctionData(functionFragment: "loserStakeEscrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "minimumAssertionPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "nodeHasStaker", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "outbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeOldOutbox", values: [string]): string;
    encodeFunctionData(functionFragment: "resume", values?: undefined): string;
    encodeFunctionData(functionFragment: "rollupDeploymentBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "rollupEventInbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "sequencerInbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "setBaseStake", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setConfirmPeriodBlocks", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setDelayedInbox", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setExtraChallengeTimeBlocks", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setInbox", values: [string]): string;
    encodeFunctionData(functionFragment: "setLoserStakeEscrow", values: [string]): string;
    encodeFunctionData(functionFragment: "setMinimumAssertionPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setOutbox", values: [string]): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "setSequencerInbox", values: [string]): string;
    encodeFunctionData(functionFragment: "setStakeToken", values: [string]): string;
    encodeFunctionData(functionFragment: "setValidator", values: [string[], boolean[]]): string;
    encodeFunctionData(functionFragment: "setValidatorWhitelistDisabled", values: [boolean]): string;
    encodeFunctionData(functionFragment: "setWasmModuleRoot", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "stakeToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "stakerCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalWithdrawableFunds", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeBeacon", values: [string, string]): string;
    encodeFunctionData(functionFragment: "upgradeSecondaryTo", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeSecondaryToAndCall", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "validatorUtils", values?: undefined): string;
    encodeFunctionData(functionFragment: "validatorWalletCreator", values?: undefined): string;
    encodeFunctionData(functionFragment: "validatorWhitelistDisabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "wasmModuleRoot", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawableFunds", values: [string]): string;
    encodeFunctionData(functionFragment: "zombieAddress", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "zombieCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "zombieLatestStakedNode", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "_stakerMap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "amountStaked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "challengeManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmPeriodBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createNitroMigrationGenesis", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentChallenge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extraChallengeTimeBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "firstUnresolvedNode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceConfirmNode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceCreateNode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceRefundStaker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceResolveChallenge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNodeCreationBlockForLogLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStaker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakerAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "inbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isStaked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isStakedOnLatestConfirmed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isZombie", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastStakeBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestConfirmed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestNodeCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestStakedNode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "loserStakeEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minimumAssertionPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nodeHasStaker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeOldOutbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resume", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rollupDeploymentBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rollupEventInbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sequencerInbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBaseStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfirmPeriodBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDelayedInbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setExtraChallengeTimeBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLoserStakeEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinimumAssertionPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOutbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSequencerInbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStakeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setValidator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setValidatorWhitelistDisabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWasmModuleRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakerCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalWithdrawableFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeBeacon", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeSecondaryTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeSecondaryToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validatorUtils", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validatorWalletCreator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validatorWhitelistDisabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wasmModuleRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawableFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "zombieAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "zombieCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "zombieLatestStakedNode", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "NodeConfirmed(uint64,bytes32,bytes32)": EventFragment;
        "NodeCreated(uint64,bytes32,bytes32,bytes32,tuple,bytes32,bytes32,uint256)": EventFragment;
        "NodeRejected(uint64)": EventFragment;
        "OwnerFunctionCalled(uint256)": EventFragment;
        "Paused(address)": EventFragment;
        "RollupChallengeStarted(uint64,address,address,uint64)": EventFragment;
        "RollupInitialized(bytes32,uint256)": EventFragment;
        "Unpaused(address)": EventFragment;
        "Upgraded(address)": EventFragment;
        "UpgradedSecondary(address)": EventFragment;
        "UserStakeUpdated(address,uint256,uint256)": EventFragment;
        "UserWithdrawableFundsUpdated(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NodeConfirmed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NodeCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NodeRejected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerFunctionCalled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RollupChallengeStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RollupInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpgradedSecondary"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UserStakeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UserWithdrawableFundsUpdated"): EventFragment;
}
export type AdminChangedEvent = TypedEvent<[
    string,
    string
], {
    previousAdmin: string;
    newAdmin: string;
}>;
export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export type BeaconUpgradedEvent = TypedEvent<[string], {
    beacon: string;
}>;
export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export type NodeConfirmedEvent = TypedEvent<[
    BigNumber,
    string,
    string
], {
    nodeNum: BigNumber;
    blockHash: string;
    sendRoot: string;
}>;
export type NodeConfirmedEventFilter = TypedEventFilter<NodeConfirmedEvent>;
export type NodeCreatedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    string,
    AssertionStructOutput,
    string,
    string,
    BigNumber
], {
    nodeNum: BigNumber;
    parentNodeHash: string;
    nodeHash: string;
    executionHash: string;
    assertion: AssertionStructOutput;
    afterInboxBatchAcc: string;
    wasmModuleRoot: string;
    inboxMaxCount: BigNumber;
}>;
export type NodeCreatedEventFilter = TypedEventFilter<NodeCreatedEvent>;
export type NodeRejectedEvent = TypedEvent<[BigNumber], {
    nodeNum: BigNumber;
}>;
export type NodeRejectedEventFilter = TypedEventFilter<NodeRejectedEvent>;
export type OwnerFunctionCalledEvent = TypedEvent<[
    BigNumber
], {
    id: BigNumber;
}>;
export type OwnerFunctionCalledEventFilter = TypedEventFilter<OwnerFunctionCalledEvent>;
export type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export type PausedEventFilter = TypedEventFilter<PausedEvent>;
export type RollupChallengeStartedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber
], {
    challengeIndex: BigNumber;
    asserter: string;
    challenger: string;
    challengedNode: BigNumber;
}>;
export type RollupChallengeStartedEventFilter = TypedEventFilter<RollupChallengeStartedEvent>;
export type RollupInitializedEvent = TypedEvent<[
    string,
    BigNumber
], {
    machineHash: string;
    chainId: BigNumber;
}>;
export type RollupInitializedEventFilter = TypedEventFilter<RollupInitializedEvent>;
export type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export type UpgradedEvent = TypedEvent<[string], {
    implementation: string;
}>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export type UpgradedSecondaryEvent = TypedEvent<[
    string
], {
    implementation: string;
}>;
export type UpgradedSecondaryEventFilter = TypedEventFilter<UpgradedSecondaryEvent>;
export type UserStakeUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    user: string;
    initialBalance: BigNumber;
    finalBalance: BigNumber;
}>;
export type UserStakeUpdatedEventFilter = TypedEventFilter<UserStakeUpdatedEvent>;
export type UserWithdrawableFundsUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    user: string;
    initialBalance: BigNumber;
    finalBalance: BigNumber;
}>;
export type UserWithdrawableFundsUpdatedEventFilter = TypedEventFilter<UserWithdrawableFundsUpdatedEvent>;
export interface RollupAdminLogic extends BaseContract {
    contractName: "RollupAdminLogic";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RollupAdminLogicInterface;
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
        _stakerMap(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean
        ] & {
            amountStaked: BigNumber;
            index: BigNumber;
            latestStakedNode: BigNumber;
            currentChallenge: BigNumber;
            isStaked: boolean;
        }>;
        amountStaked(staker: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        baseStake(overrides?: CallOverrides): Promise<[BigNumber]>;
        bridge(overrides?: CallOverrides): Promise<[string]>;
        chainId(overrides?: CallOverrides): Promise<[BigNumber]>;
        challengeManager(overrides?: CallOverrides): Promise<[string]>;
        confirmPeriodBlocks(overrides?: CallOverrides): Promise<[BigNumber]>;
        createNitroMigrationGenesis(assertion: AssertionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        currentChallenge(staker: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        extraChallengeTimeBlocks(overrides?: CallOverrides): Promise<[BigNumber]>;
        firstUnresolvedNode(overrides?: CallOverrides): Promise<[BigNumber]>;
        forceConfirmNode(nodeNum: BigNumberish, blockHash: BytesLike, sendRoot: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        forceCreateNode(prevNode: BigNumberish, prevNodeInboxMaxCount: BigNumberish, assertion: AssertionStruct, expectedNodeHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        forceRefundStaker(staker: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        forceResolveChallenge(stakerA: string[], stakerB: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getNode(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<[NodeStructOutput]>;
        getNodeCreationBlockForLogLookup(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getStaker(staker: string, overrides?: CallOverrides): Promise<[IRollupCore.StakerStructOutput]>;
        getStakerAddress(stakerNum: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        inbox(overrides?: CallOverrides): Promise<[string]>;
        initialize(config: ConfigStruct, connectedContracts: ContractDependenciesStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isStaked(staker: string, overrides?: CallOverrides): Promise<[boolean]>;
        isStakedOnLatestConfirmed(staker: string, overrides?: CallOverrides): Promise<[boolean]>;
        isValidator(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        isZombie(staker: string, overrides?: CallOverrides): Promise<[boolean]>;
        lastStakeBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        latestConfirmed(overrides?: CallOverrides): Promise<[BigNumber]>;
        latestNodeCreated(overrides?: CallOverrides): Promise<[BigNumber]>;
        latestStakedNode(staker: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        loserStakeEscrow(overrides?: CallOverrides): Promise<[string]>;
        minimumAssertionPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        nodeHasStaker(nodeNum: BigNumberish, staker: string, overrides?: CallOverrides): Promise<[boolean]>;
        outbox(overrides?: CallOverrides): Promise<[string]>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        removeOldOutbox(_outbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        resume(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        rollupDeploymentBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        rollupEventInbox(overrides?: CallOverrides): Promise<[string]>;
        sequencerInbox(overrides?: CallOverrides): Promise<[string]>;
        setBaseStake(newBaseStake: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setConfirmPeriodBlocks(newConfirmPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDelayedInbox(_inbox: string, _enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setExtraChallengeTimeBlocks(newExtraTimeBlocks: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setInbox(newInbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setLoserStakeEscrow(newLoserStakerEscrow: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMinimumAssertionPeriod(newPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOutbox(_outbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSequencerInbox(_sequencerInbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setStakeToken(newStakeToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setValidator(_validator: string[], _val: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setValidatorWhitelistDisabled(_validatorWhitelistDisabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setWasmModuleRoot(newWasmModuleRoot: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stakeToken(overrides?: CallOverrides): Promise<[string]>;
        stakerCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalWithdrawableFunds(overrides?: CallOverrides): Promise<[BigNumber]>;
        upgradeBeacon(beacon: string, newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeSecondaryTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeSecondaryToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validatorUtils(overrides?: CallOverrides): Promise<[string]>;
        validatorWalletCreator(overrides?: CallOverrides): Promise<[string]>;
        validatorWhitelistDisabled(overrides?: CallOverrides): Promise<[boolean]>;
        wasmModuleRoot(overrides?: CallOverrides): Promise<[string]>;
        withdrawableFunds(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        zombieAddress(zombieNum: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        zombieCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        zombieLatestStakedNode(zombieNum: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    _stakerMap(arg0: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        amountStaked: BigNumber;
        index: BigNumber;
        latestStakedNode: BigNumber;
        currentChallenge: BigNumber;
        isStaked: boolean;
    }>;
    amountStaked(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
    baseStake(overrides?: CallOverrides): Promise<BigNumber>;
    bridge(overrides?: CallOverrides): Promise<string>;
    chainId(overrides?: CallOverrides): Promise<BigNumber>;
    challengeManager(overrides?: CallOverrides): Promise<string>;
    confirmPeriodBlocks(overrides?: CallOverrides): Promise<BigNumber>;
    createNitroMigrationGenesis(assertion: AssertionStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    currentChallenge(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
    extraChallengeTimeBlocks(overrides?: CallOverrides): Promise<BigNumber>;
    firstUnresolvedNode(overrides?: CallOverrides): Promise<BigNumber>;
    forceConfirmNode(nodeNum: BigNumberish, blockHash: BytesLike, sendRoot: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    forceCreateNode(prevNode: BigNumberish, prevNodeInboxMaxCount: BigNumberish, assertion: AssertionStruct, expectedNodeHash: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    forceRefundStaker(staker: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    forceResolveChallenge(stakerA: string[], stakerB: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getNode(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<NodeStructOutput>;
    getNodeCreationBlockForLogLookup(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getStaker(staker: string, overrides?: CallOverrides): Promise<IRollupCore.StakerStructOutput>;
    getStakerAddress(stakerNum: BigNumberish, overrides?: CallOverrides): Promise<string>;
    inbox(overrides?: CallOverrides): Promise<string>;
    initialize(config: ConfigStruct, connectedContracts: ContractDependenciesStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isStaked(staker: string, overrides?: CallOverrides): Promise<boolean>;
    isStakedOnLatestConfirmed(staker: string, overrides?: CallOverrides): Promise<boolean>;
    isValidator(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    isZombie(staker: string, overrides?: CallOverrides): Promise<boolean>;
    lastStakeBlock(overrides?: CallOverrides): Promise<BigNumber>;
    latestConfirmed(overrides?: CallOverrides): Promise<BigNumber>;
    latestNodeCreated(overrides?: CallOverrides): Promise<BigNumber>;
    latestStakedNode(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
    loserStakeEscrow(overrides?: CallOverrides): Promise<string>;
    minimumAssertionPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    nodeHasStaker(nodeNum: BigNumberish, staker: string, overrides?: CallOverrides): Promise<boolean>;
    outbox(overrides?: CallOverrides): Promise<string>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    removeOldOutbox(_outbox: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    resume(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    rollupDeploymentBlock(overrides?: CallOverrides): Promise<BigNumber>;
    rollupEventInbox(overrides?: CallOverrides): Promise<string>;
    sequencerInbox(overrides?: CallOverrides): Promise<string>;
    setBaseStake(newBaseStake: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setConfirmPeriodBlocks(newConfirmPeriod: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDelayedInbox(_inbox: string, _enabled: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setExtraChallengeTimeBlocks(newExtraTimeBlocks: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setInbox(newInbox: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setLoserStakeEscrow(newLoserStakerEscrow: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMinimumAssertionPeriod(newPeriod: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOutbox(_outbox: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOwner(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSequencerInbox(_sequencerInbox: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setStakeToken(newStakeToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setValidator(_validator: string[], _val: boolean[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setValidatorWhitelistDisabled(_validatorWhitelistDisabled: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setWasmModuleRoot(newWasmModuleRoot: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stakeToken(overrides?: CallOverrides): Promise<string>;
    stakerCount(overrides?: CallOverrides): Promise<BigNumber>;
    totalWithdrawableFunds(overrides?: CallOverrides): Promise<BigNumber>;
    upgradeBeacon(beacon: string, newImplementation: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeSecondaryTo(newImplementation: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeSecondaryToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validatorUtils(overrides?: CallOverrides): Promise<string>;
    validatorWalletCreator(overrides?: CallOverrides): Promise<string>;
    validatorWhitelistDisabled(overrides?: CallOverrides): Promise<boolean>;
    wasmModuleRoot(overrides?: CallOverrides): Promise<string>;
    withdrawableFunds(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    zombieAddress(zombieNum: BigNumberish, overrides?: CallOverrides): Promise<string>;
    zombieCount(overrides?: CallOverrides): Promise<BigNumber>;
    zombieLatestStakedNode(zombieNum: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        _stakerMap(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean
        ] & {
            amountStaked: BigNumber;
            index: BigNumber;
            latestStakedNode: BigNumber;
            currentChallenge: BigNumber;
            isStaked: boolean;
        }>;
        amountStaked(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        baseStake(overrides?: CallOverrides): Promise<BigNumber>;
        bridge(overrides?: CallOverrides): Promise<string>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        challengeManager(overrides?: CallOverrides): Promise<string>;
        confirmPeriodBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        createNitroMigrationGenesis(assertion: AssertionStruct, overrides?: CallOverrides): Promise<void>;
        currentChallenge(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        extraChallengeTimeBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        firstUnresolvedNode(overrides?: CallOverrides): Promise<BigNumber>;
        forceConfirmNode(nodeNum: BigNumberish, blockHash: BytesLike, sendRoot: BytesLike, overrides?: CallOverrides): Promise<void>;
        forceCreateNode(prevNode: BigNumberish, prevNodeInboxMaxCount: BigNumberish, assertion: AssertionStruct, expectedNodeHash: BytesLike, overrides?: CallOverrides): Promise<void>;
        forceRefundStaker(staker: string[], overrides?: CallOverrides): Promise<void>;
        forceResolveChallenge(stakerA: string[], stakerB: string[], overrides?: CallOverrides): Promise<void>;
        getNode(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<NodeStructOutput>;
        getNodeCreationBlockForLogLookup(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getStaker(staker: string, overrides?: CallOverrides): Promise<IRollupCore.StakerStructOutput>;
        getStakerAddress(stakerNum: BigNumberish, overrides?: CallOverrides): Promise<string>;
        inbox(overrides?: CallOverrides): Promise<string>;
        initialize(config: ConfigStruct, connectedContracts: ContractDependenciesStruct, overrides?: CallOverrides): Promise<void>;
        isStaked(staker: string, overrides?: CallOverrides): Promise<boolean>;
        isStakedOnLatestConfirmed(staker: string, overrides?: CallOverrides): Promise<boolean>;
        isValidator(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        isZombie(staker: string, overrides?: CallOverrides): Promise<boolean>;
        lastStakeBlock(overrides?: CallOverrides): Promise<BigNumber>;
        latestConfirmed(overrides?: CallOverrides): Promise<BigNumber>;
        latestNodeCreated(overrides?: CallOverrides): Promise<BigNumber>;
        latestStakedNode(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        loserStakeEscrow(overrides?: CallOverrides): Promise<string>;
        minimumAssertionPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        nodeHasStaker(nodeNum: BigNumberish, staker: string, overrides?: CallOverrides): Promise<boolean>;
        outbox(overrides?: CallOverrides): Promise<string>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        removeOldOutbox(_outbox: string, overrides?: CallOverrides): Promise<void>;
        resume(overrides?: CallOverrides): Promise<void>;
        rollupDeploymentBlock(overrides?: CallOverrides): Promise<BigNumber>;
        rollupEventInbox(overrides?: CallOverrides): Promise<string>;
        sequencerInbox(overrides?: CallOverrides): Promise<string>;
        setBaseStake(newBaseStake: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setConfirmPeriodBlocks(newConfirmPeriod: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setDelayedInbox(_inbox: string, _enabled: boolean, overrides?: CallOverrides): Promise<void>;
        setExtraChallengeTimeBlocks(newExtraTimeBlocks: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setInbox(newInbox: string, overrides?: CallOverrides): Promise<void>;
        setLoserStakeEscrow(newLoserStakerEscrow: string, overrides?: CallOverrides): Promise<void>;
        setMinimumAssertionPeriod(newPeriod: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setOutbox(_outbox: string, overrides?: CallOverrides): Promise<void>;
        setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;
        setSequencerInbox(_sequencerInbox: string, overrides?: CallOverrides): Promise<void>;
        setStakeToken(newStakeToken: string, overrides?: CallOverrides): Promise<void>;
        setValidator(_validator: string[], _val: boolean[], overrides?: CallOverrides): Promise<void>;
        setValidatorWhitelistDisabled(_validatorWhitelistDisabled: boolean, overrides?: CallOverrides): Promise<void>;
        setWasmModuleRoot(newWasmModuleRoot: BytesLike, overrides?: CallOverrides): Promise<void>;
        stakeToken(overrides?: CallOverrides): Promise<string>;
        stakerCount(overrides?: CallOverrides): Promise<BigNumber>;
        totalWithdrawableFunds(overrides?: CallOverrides): Promise<BigNumber>;
        upgradeBeacon(beacon: string, newImplementation: string, overrides?: CallOverrides): Promise<void>;
        upgradeSecondaryTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;
        upgradeSecondaryToAndCall(newImplementation: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        validatorUtils(overrides?: CallOverrides): Promise<string>;
        validatorWalletCreator(overrides?: CallOverrides): Promise<string>;
        validatorWhitelistDisabled(overrides?: CallOverrides): Promise<boolean>;
        wasmModuleRoot(overrides?: CallOverrides): Promise<string>;
        withdrawableFunds(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        zombieAddress(zombieNum: BigNumberish, overrides?: CallOverrides): Promise<string>;
        zombieCount(overrides?: CallOverrides): Promise<BigNumber>;
        zombieLatestStakedNode(zombieNum: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: string | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;
        "NodeConfirmed(uint64,bytes32,bytes32)"(nodeNum?: BigNumberish | null, blockHash?: null, sendRoot?: null): NodeConfirmedEventFilter;
        NodeConfirmed(nodeNum?: BigNumberish | null, blockHash?: null, sendRoot?: null): NodeConfirmedEventFilter;
        "NodeCreated(uint64,bytes32,bytes32,bytes32,tuple,bytes32,bytes32,uint256)"(nodeNum?: BigNumberish | null, parentNodeHash?: BytesLike | null, nodeHash?: BytesLike | null, executionHash?: null, assertion?: null, afterInboxBatchAcc?: null, wasmModuleRoot?: null, inboxMaxCount?: null): NodeCreatedEventFilter;
        NodeCreated(nodeNum?: BigNumberish | null, parentNodeHash?: BytesLike | null, nodeHash?: BytesLike | null, executionHash?: null, assertion?: null, afterInboxBatchAcc?: null, wasmModuleRoot?: null, inboxMaxCount?: null): NodeCreatedEventFilter;
        "NodeRejected(uint64)"(nodeNum?: BigNumberish | null): NodeRejectedEventFilter;
        NodeRejected(nodeNum?: BigNumberish | null): NodeRejectedEventFilter;
        "OwnerFunctionCalled(uint256)"(id?: BigNumberish | null): OwnerFunctionCalledEventFilter;
        OwnerFunctionCalled(id?: BigNumberish | null): OwnerFunctionCalledEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "RollupChallengeStarted(uint64,address,address,uint64)"(challengeIndex?: BigNumberish | null, asserter?: null, challenger?: null, challengedNode?: null): RollupChallengeStartedEventFilter;
        RollupChallengeStarted(challengeIndex?: BigNumberish | null, asserter?: null, challenger?: null, challengedNode?: null): RollupChallengeStartedEventFilter;
        "RollupInitialized(bytes32,uint256)"(machineHash?: null, chainId?: null): RollupInitializedEventFilter;
        RollupInitialized(machineHash?: null, chainId?: null): RollupInitializedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
        "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
        "UpgradedSecondary(address)"(implementation?: string | null): UpgradedSecondaryEventFilter;
        UpgradedSecondary(implementation?: string | null): UpgradedSecondaryEventFilter;
        "UserStakeUpdated(address,uint256,uint256)"(user?: string | null, initialBalance?: null, finalBalance?: null): UserStakeUpdatedEventFilter;
        UserStakeUpdated(user?: string | null, initialBalance?: null, finalBalance?: null): UserStakeUpdatedEventFilter;
        "UserWithdrawableFundsUpdated(address,uint256,uint256)"(user?: string | null, initialBalance?: null, finalBalance?: null): UserWithdrawableFundsUpdatedEventFilter;
        UserWithdrawableFundsUpdated(user?: string | null, initialBalance?: null, finalBalance?: null): UserWithdrawableFundsUpdatedEventFilter;
    };
    estimateGas: {
        _stakerMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        amountStaked(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        baseStake(overrides?: CallOverrides): Promise<BigNumber>;
        bridge(overrides?: CallOverrides): Promise<BigNumber>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        challengeManager(overrides?: CallOverrides): Promise<BigNumber>;
        confirmPeriodBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        createNitroMigrationGenesis(assertion: AssertionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        currentChallenge(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        extraChallengeTimeBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        firstUnresolvedNode(overrides?: CallOverrides): Promise<BigNumber>;
        forceConfirmNode(nodeNum: BigNumberish, blockHash: BytesLike, sendRoot: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        forceCreateNode(prevNode: BigNumberish, prevNodeInboxMaxCount: BigNumberish, assertion: AssertionStruct, expectedNodeHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        forceRefundStaker(staker: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        forceResolveChallenge(stakerA: string[], stakerB: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getNode(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getNodeCreationBlockForLogLookup(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getStaker(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        getStakerAddress(stakerNum: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        inbox(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(config: ConfigStruct, connectedContracts: ContractDependenciesStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isStaked(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        isStakedOnLatestConfirmed(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        isValidator(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        isZombie(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        lastStakeBlock(overrides?: CallOverrides): Promise<BigNumber>;
        latestConfirmed(overrides?: CallOverrides): Promise<BigNumber>;
        latestNodeCreated(overrides?: CallOverrides): Promise<BigNumber>;
        latestStakedNode(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        loserStakeEscrow(overrides?: CallOverrides): Promise<BigNumber>;
        minimumAssertionPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        nodeHasStaker(nodeNum: BigNumberish, staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        outbox(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        removeOldOutbox(_outbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        resume(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        rollupDeploymentBlock(overrides?: CallOverrides): Promise<BigNumber>;
        rollupEventInbox(overrides?: CallOverrides): Promise<BigNumber>;
        sequencerInbox(overrides?: CallOverrides): Promise<BigNumber>;
        setBaseStake(newBaseStake: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setConfirmPeriodBlocks(newConfirmPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDelayedInbox(_inbox: string, _enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setExtraChallengeTimeBlocks(newExtraTimeBlocks: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setInbox(newInbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setLoserStakeEscrow(newLoserStakerEscrow: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMinimumAssertionPeriod(newPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOutbox(_outbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSequencerInbox(_sequencerInbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setStakeToken(newStakeToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setValidator(_validator: string[], _val: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setValidatorWhitelistDisabled(_validatorWhitelistDisabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setWasmModuleRoot(newWasmModuleRoot: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stakeToken(overrides?: CallOverrides): Promise<BigNumber>;
        stakerCount(overrides?: CallOverrides): Promise<BigNumber>;
        totalWithdrawableFunds(overrides?: CallOverrides): Promise<BigNumber>;
        upgradeBeacon(beacon: string, newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeSecondaryTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeSecondaryToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validatorUtils(overrides?: CallOverrides): Promise<BigNumber>;
        validatorWalletCreator(overrides?: CallOverrides): Promise<BigNumber>;
        validatorWhitelistDisabled(overrides?: CallOverrides): Promise<BigNumber>;
        wasmModuleRoot(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawableFunds(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        zombieAddress(zombieNum: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        zombieCount(overrides?: CallOverrides): Promise<BigNumber>;
        zombieLatestStakedNode(zombieNum: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _stakerMap(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        amountStaked(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseStake(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        challengeManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        confirmPeriodBlocks(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createNitroMigrationGenesis(assertion: AssertionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        currentChallenge(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extraChallengeTimeBlocks(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        firstUnresolvedNode(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forceConfirmNode(nodeNum: BigNumberish, blockHash: BytesLike, sendRoot: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        forceCreateNode(prevNode: BigNumberish, prevNodeInboxMaxCount: BigNumberish, assertion: AssertionStruct, expectedNodeHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        forceRefundStaker(staker: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        forceResolveChallenge(stakerA: string[], stakerB: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getNode(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNodeCreationBlockForLogLookup(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStaker(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakerAddress(stakerNum: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        inbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(config: ConfigStruct, connectedContracts: ContractDependenciesStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isStaked(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isStakedOnLatestConfirmed(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isValidator(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isZombie(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastStakeBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestConfirmed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestNodeCreated(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestStakedNode(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        loserStakeEscrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minimumAssertionPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nodeHasStaker(nodeNum: BigNumberish, staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        outbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeOldOutbox(_outbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        resume(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        rollupDeploymentBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rollupEventInbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sequencerInbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setBaseStake(newBaseStake: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setConfirmPeriodBlocks(newConfirmPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDelayedInbox(_inbox: string, _enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setExtraChallengeTimeBlocks(newExtraTimeBlocks: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setInbox(newInbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setLoserStakeEscrow(newLoserStakerEscrow: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMinimumAssertionPeriod(newPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOutbox(_outbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSequencerInbox(_sequencerInbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setStakeToken(newStakeToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setValidator(_validator: string[], _val: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setValidatorWhitelistDisabled(_validatorWhitelistDisabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setWasmModuleRoot(newWasmModuleRoot: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stakeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stakerCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalWithdrawableFunds(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        upgradeBeacon(beacon: string, newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeSecondaryTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeSecondaryToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validatorUtils(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validatorWalletCreator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validatorWhitelistDisabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wasmModuleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawableFunds(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        zombieAddress(zombieNum: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        zombieCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        zombieLatestStakedNode(zombieNum: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
