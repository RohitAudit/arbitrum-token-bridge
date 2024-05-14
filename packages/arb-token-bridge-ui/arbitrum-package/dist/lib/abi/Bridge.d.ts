import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface BridgeInterface extends utils.Interface {
    contractName: "Bridge";
    functions: {
        "acceptFundsFromOldBridge()": FunctionFragment;
        "activeOutbox()": FunctionFragment;
        "allowedDelayedInboxList(uint256)": FunctionFragment;
        "allowedDelayedInboxes(address)": FunctionFragment;
        "allowedOutboxList(uint256)": FunctionFragment;
        "allowedOutboxes(address)": FunctionFragment;
        "delayedInboxAccs(uint256)": FunctionFragment;
        "delayedMessageCount()": FunctionFragment;
        "enqueueDelayedMessage(uint8,address,bytes32)": FunctionFragment;
        "enqueueSequencerMessage(bytes32,uint256,uint256,uint256)": FunctionFragment;
        "executeCall(address,uint256,bytes)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "rollup()": FunctionFragment;
        "sequencerInbox()": FunctionFragment;
        "sequencerInboxAccs(uint256)": FunctionFragment;
        "sequencerMessageCount()": FunctionFragment;
        "sequencerReportedSubMessageCount()": FunctionFragment;
        "setDelayedInbox(address,bool)": FunctionFragment;
        "setOutbox(address,bool)": FunctionFragment;
        "setSequencerInbox(address)": FunctionFragment;
        "setSequencerReportedSubMessageCount(uint256)": FunctionFragment;
        "submitBatchSpendingReport(address,bytes32)": FunctionFragment;
        "updateRollupAddress(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "acceptFundsFromOldBridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "activeOutbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowedDelayedInboxList", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "allowedDelayedInboxes", values: [string]): string;
    encodeFunctionData(functionFragment: "allowedOutboxList", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "allowedOutboxes", values: [string]): string;
    encodeFunctionData(functionFragment: "delayedInboxAccs", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "delayedMessageCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "enqueueDelayedMessage", values: [BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "enqueueSequencerMessage", values: [BytesLike, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeCall", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "rollup", values?: undefined): string;
    encodeFunctionData(functionFragment: "sequencerInbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "sequencerInboxAccs", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "sequencerMessageCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "sequencerReportedSubMessageCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "setDelayedInbox", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setOutbox", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setSequencerInbox", values: [string]): string;
    encodeFunctionData(functionFragment: "setSequencerReportedSubMessageCount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "submitBatchSpendingReport", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "updateRollupAddress", values: [string]): string;
    decodeFunctionResult(functionFragment: "acceptFundsFromOldBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "activeOutbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowedDelayedInboxList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowedDelayedInboxes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowedOutboxList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowedOutboxes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delayedInboxAccs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delayedMessageCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enqueueDelayedMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enqueueSequencerMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rollup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sequencerInbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sequencerInboxAccs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sequencerMessageCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sequencerReportedSubMessageCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDelayedInbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOutbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSequencerInbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSequencerReportedSubMessageCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitBatchSpendingReport", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateRollupAddress", data: BytesLike): Result;
    events: {
        "BridgeCallTriggered(address,address,uint256,bytes)": EventFragment;
        "InboxToggle(address,bool)": EventFragment;
        "MessageDelivered(uint256,bytes32,address,uint8,address,bytes32,uint256,uint64)": EventFragment;
        "OutboxToggle(address,bool)": EventFragment;
        "RollupUpdated(address)": EventFragment;
        "SequencerInboxUpdated(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BridgeCallTriggered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InboxToggle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MessageDelivered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OutboxToggle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RollupUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SequencerInboxUpdated"): EventFragment;
}
export type BridgeCallTriggeredEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], {
    outbox: string;
    to: string;
    value: BigNumber;
    data: string;
}>;
export type BridgeCallTriggeredEventFilter = TypedEventFilter<BridgeCallTriggeredEvent>;
export type InboxToggleEvent = TypedEvent<[
    string,
    boolean
], {
    inbox: string;
    enabled: boolean;
}>;
export type InboxToggleEventFilter = TypedEventFilter<InboxToggleEvent>;
export type MessageDeliveredEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    number,
    string,
    string,
    BigNumber,
    BigNumber
], {
    messageIndex: BigNumber;
    beforeInboxAcc: string;
    inbox: string;
    kind: number;
    sender: string;
    messageDataHash: string;
    baseFeeL1: BigNumber;
    timestamp: BigNumber;
}>;
export type MessageDeliveredEventFilter = TypedEventFilter<MessageDeliveredEvent>;
export type OutboxToggleEvent = TypedEvent<[
    string,
    boolean
], {
    outbox: string;
    enabled: boolean;
}>;
export type OutboxToggleEventFilter = TypedEventFilter<OutboxToggleEvent>;
export type RollupUpdatedEvent = TypedEvent<[string], {
    rollup: string;
}>;
export type RollupUpdatedEventFilter = TypedEventFilter<RollupUpdatedEvent>;
export type SequencerInboxUpdatedEvent = TypedEvent<[
    string
], {
    newSequencerInbox: string;
}>;
export type SequencerInboxUpdatedEventFilter = TypedEventFilter<SequencerInboxUpdatedEvent>;
export interface Bridge extends BaseContract {
    contractName: "Bridge";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BridgeInterface;
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
        acceptFundsFromOldBridge(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        activeOutbox(overrides?: CallOverrides): Promise<[string]>;
        allowedDelayedInboxList(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        allowedDelayedInboxes(inbox: string, overrides?: CallOverrides): Promise<[boolean]>;
        allowedOutboxList(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        allowedOutboxes(outbox: string, overrides?: CallOverrides): Promise<[boolean]>;
        delayedInboxAccs(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        delayedMessageCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        enqueueDelayedMessage(kind: BigNumberish, sender: string, messageDataHash: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        enqueueSequencerMessage(dataHash: BytesLike, afterDelayedMessagesRead: BigNumberish, prevMessageCount: BigNumberish, newMessageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeCall(to: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(rollup_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        rollup(overrides?: CallOverrides): Promise<[string]>;
        sequencerInbox(overrides?: CallOverrides): Promise<[string]>;
        sequencerInboxAccs(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        sequencerMessageCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        sequencerReportedSubMessageCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        setDelayedInbox(inbox: string, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOutbox(outbox: string, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSequencerInbox(_sequencerInbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSequencerReportedSubMessageCount(newMsgCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        submitBatchSpendingReport(sender: string, messageDataHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateRollupAddress(_rollup: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    acceptFundsFromOldBridge(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    activeOutbox(overrides?: CallOverrides): Promise<string>;
    allowedDelayedInboxList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    allowedDelayedInboxes(inbox: string, overrides?: CallOverrides): Promise<boolean>;
    allowedOutboxList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    allowedOutboxes(outbox: string, overrides?: CallOverrides): Promise<boolean>;
    delayedInboxAccs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    delayedMessageCount(overrides?: CallOverrides): Promise<BigNumber>;
    enqueueDelayedMessage(kind: BigNumberish, sender: string, messageDataHash: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    enqueueSequencerMessage(dataHash: BytesLike, afterDelayedMessagesRead: BigNumberish, prevMessageCount: BigNumberish, newMessageCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeCall(to: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(rollup_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    rollup(overrides?: CallOverrides): Promise<string>;
    sequencerInbox(overrides?: CallOverrides): Promise<string>;
    sequencerInboxAccs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    sequencerMessageCount(overrides?: CallOverrides): Promise<BigNumber>;
    sequencerReportedSubMessageCount(overrides?: CallOverrides): Promise<BigNumber>;
    setDelayedInbox(inbox: string, enabled: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOutbox(outbox: string, enabled: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSequencerInbox(_sequencerInbox: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSequencerReportedSubMessageCount(newMsgCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    submitBatchSpendingReport(sender: string, messageDataHash: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateRollupAddress(_rollup: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        acceptFundsFromOldBridge(overrides?: CallOverrides): Promise<void>;
        activeOutbox(overrides?: CallOverrides): Promise<string>;
        allowedDelayedInboxList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        allowedDelayedInboxes(inbox: string, overrides?: CallOverrides): Promise<boolean>;
        allowedOutboxList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        allowedOutboxes(outbox: string, overrides?: CallOverrides): Promise<boolean>;
        delayedInboxAccs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        delayedMessageCount(overrides?: CallOverrides): Promise<BigNumber>;
        enqueueDelayedMessage(kind: BigNumberish, sender: string, messageDataHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        enqueueSequencerMessage(dataHash: BytesLike, afterDelayedMessagesRead: BigNumberish, prevMessageCount: BigNumberish, newMessageCount: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            string,
            string
        ] & {
            seqMessageIndex: BigNumber;
            beforeAcc: string;
            delayedAcc: string;
            acc: string;
        }>;
        executeCall(to: string, value: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            returnData: string;
        }>;
        initialize(rollup_: string, overrides?: CallOverrides): Promise<void>;
        rollup(overrides?: CallOverrides): Promise<string>;
        sequencerInbox(overrides?: CallOverrides): Promise<string>;
        sequencerInboxAccs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        sequencerMessageCount(overrides?: CallOverrides): Promise<BigNumber>;
        sequencerReportedSubMessageCount(overrides?: CallOverrides): Promise<BigNumber>;
        setDelayedInbox(inbox: string, enabled: boolean, overrides?: CallOverrides): Promise<void>;
        setOutbox(outbox: string, enabled: boolean, overrides?: CallOverrides): Promise<void>;
        setSequencerInbox(_sequencerInbox: string, overrides?: CallOverrides): Promise<void>;
        setSequencerReportedSubMessageCount(newMsgCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        submitBatchSpendingReport(sender: string, messageDataHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        updateRollupAddress(_rollup: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "BridgeCallTriggered(address,address,uint256,bytes)"(outbox?: string | null, to?: string | null, value?: null, data?: null): BridgeCallTriggeredEventFilter;
        BridgeCallTriggered(outbox?: string | null, to?: string | null, value?: null, data?: null): BridgeCallTriggeredEventFilter;
        "InboxToggle(address,bool)"(inbox?: string | null, enabled?: null): InboxToggleEventFilter;
        InboxToggle(inbox?: string | null, enabled?: null): InboxToggleEventFilter;
        "MessageDelivered(uint256,bytes32,address,uint8,address,bytes32,uint256,uint64)"(messageIndex?: BigNumberish | null, beforeInboxAcc?: BytesLike | null, inbox?: null, kind?: null, sender?: null, messageDataHash?: null, baseFeeL1?: null, timestamp?: null): MessageDeliveredEventFilter;
        MessageDelivered(messageIndex?: BigNumberish | null, beforeInboxAcc?: BytesLike | null, inbox?: null, kind?: null, sender?: null, messageDataHash?: null, baseFeeL1?: null, timestamp?: null): MessageDeliveredEventFilter;
        "OutboxToggle(address,bool)"(outbox?: string | null, enabled?: null): OutboxToggleEventFilter;
        OutboxToggle(outbox?: string | null, enabled?: null): OutboxToggleEventFilter;
        "RollupUpdated(address)"(rollup?: null): RollupUpdatedEventFilter;
        RollupUpdated(rollup?: null): RollupUpdatedEventFilter;
        "SequencerInboxUpdated(address)"(newSequencerInbox?: null): SequencerInboxUpdatedEventFilter;
        SequencerInboxUpdated(newSequencerInbox?: null): SequencerInboxUpdatedEventFilter;
    };
    estimateGas: {
        acceptFundsFromOldBridge(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        activeOutbox(overrides?: CallOverrides): Promise<BigNumber>;
        allowedDelayedInboxList(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        allowedDelayedInboxes(inbox: string, overrides?: CallOverrides): Promise<BigNumber>;
        allowedOutboxList(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        allowedOutboxes(outbox: string, overrides?: CallOverrides): Promise<BigNumber>;
        delayedInboxAccs(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        delayedMessageCount(overrides?: CallOverrides): Promise<BigNumber>;
        enqueueDelayedMessage(kind: BigNumberish, sender: string, messageDataHash: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        enqueueSequencerMessage(dataHash: BytesLike, afterDelayedMessagesRead: BigNumberish, prevMessageCount: BigNumberish, newMessageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeCall(to: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(rollup_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        rollup(overrides?: CallOverrides): Promise<BigNumber>;
        sequencerInbox(overrides?: CallOverrides): Promise<BigNumber>;
        sequencerInboxAccs(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        sequencerMessageCount(overrides?: CallOverrides): Promise<BigNumber>;
        sequencerReportedSubMessageCount(overrides?: CallOverrides): Promise<BigNumber>;
        setDelayedInbox(inbox: string, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOutbox(outbox: string, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSequencerInbox(_sequencerInbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSequencerReportedSubMessageCount(newMsgCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        submitBatchSpendingReport(sender: string, messageDataHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateRollupAddress(_rollup: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptFundsFromOldBridge(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        activeOutbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowedDelayedInboxList(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowedDelayedInboxes(inbox: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowedOutboxList(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowedOutboxes(outbox: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delayedInboxAccs(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delayedMessageCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enqueueDelayedMessage(kind: BigNumberish, sender: string, messageDataHash: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        enqueueSequencerMessage(dataHash: BytesLike, afterDelayedMessagesRead: BigNumberish, prevMessageCount: BigNumberish, newMessageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeCall(to: string, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(rollup_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        rollup(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sequencerInbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sequencerInboxAccs(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sequencerMessageCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sequencerReportedSubMessageCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDelayedInbox(inbox: string, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOutbox(outbox: string, enabled: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSequencerInbox(_sequencerInbox: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSequencerReportedSubMessageCount(newMsgCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        submitBatchSpendingReport(sender: string, messageDataHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateRollupAddress(_rollup: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
