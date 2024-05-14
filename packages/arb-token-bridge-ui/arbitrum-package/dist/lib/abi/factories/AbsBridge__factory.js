"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsBridge__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stored",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "received",
                type: "uint256",
            },
        ],
        name: "BadSequencerMessageNumber",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "outbox",
                type: "address",
            },
        ],
        name: "InvalidOutboxSet",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "NotContract",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "NotOutbox",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "rollup",
                type: "address",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "NotRollupOrOwner",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "NotSequencerInbox",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "outbox",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "BridgeCallTriggered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "inbox",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "enabled",
                type: "bool",
            },
        ],
        name: "InboxToggle",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "messageIndex",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "beforeInboxAcc",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "inbox",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "kind",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "messageDataHash",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "baseFeeL1",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "timestamp",
                type: "uint64",
            },
        ],
        name: "MessageDelivered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "outbox",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "enabled",
                type: "bool",
            },
        ],
        name: "OutboxToggle",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "rollup",
                type: "address",
            },
        ],
        name: "RollupUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "newSequencerInbox",
                type: "address",
            },
        ],
        name: "SequencerInboxUpdated",
        type: "event",
    },
    {
        inputs: [],
        name: "acceptFundsFromOldBridge",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "activeOutbox",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "allowedDelayedInboxList",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "inbox",
                type: "address",
            },
        ],
        name: "allowedDelayedInboxes",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "allowedOutboxList",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "outbox",
                type: "address",
            },
        ],
        name: "allowedOutboxes",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "delayedInboxAccs",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "delayedMessageCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "dataHash",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "afterDelayedMessagesRead",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "prevMessageCount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "newMessageCount",
                type: "uint256",
            },
        ],
        name: "enqueueSequencerMessage",
        outputs: [
            {
                internalType: "uint256",
                name: "seqMessageIndex",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "beforeAcc",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "delayedAcc",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "acc",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "executeCall",
        outputs: [
            {
                internalType: "bool",
                name: "success",
                type: "bool",
            },
            {
                internalType: "bytes",
                name: "returnData",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "rollup",
        outputs: [
            {
                internalType: "contract IOwnable",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "sequencerInbox",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "sequencerInboxAccs",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "sequencerMessageCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "sequencerReportedSubMessageCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "inbox",
                type: "address",
            },
            {
                internalType: "bool",
                name: "enabled",
                type: "bool",
            },
        ],
        name: "setDelayedInbox",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "outbox",
                type: "address",
            },
            {
                internalType: "bool",
                name: "enabled",
                type: "bool",
            },
        ],
        name: "setOutbox",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_sequencerInbox",
                type: "address",
            },
        ],
        name: "setSequencerInbox",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newMsgCount",
                type: "uint256",
            },
        ],
        name: "setSequencerReportedSubMessageCount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "messageDataHash",
                type: "bytes32",
            },
        ],
        name: "submitBatchSpendingReport",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IOwnable",
                name: "_rollup",
                type: "address",
            },
        ],
        name: "updateRollupAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class AbsBridge__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.AbsBridge__factory = AbsBridge__factory;
AbsBridge__factory.abi = _abi;
