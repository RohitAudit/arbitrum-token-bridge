"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUpgradeExecutor__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "upgrade",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "upgradeCallData",
                type: "bytes",
            },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "targetCallData",
                type: "bytes",
            },
        ],
        name: "executeCall",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "admin",
                type: "address",
            },
            {
                internalType: "address[]",
                name: "executors",
                type: "address[]",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IUpgradeExecutor__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IUpgradeExecutor__factory = IUpgradeExecutor__factory;
IUpgradeExecutor__factory.abi = _abi;
