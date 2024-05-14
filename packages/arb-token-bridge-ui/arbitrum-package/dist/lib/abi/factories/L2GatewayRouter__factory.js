"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L2GatewayRouter__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "newDefaultGateway",
                type: "address",
            },
        ],
        name: "DefaultGatewayUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "l1Token",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "gateway",
                type: "address",
            },
        ],
        name: "GatewaySet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_userFrom",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_userTo",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "gateway",
                type: "address",
            },
        ],
        name: "TransferRouted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "TxToL1",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "l1ERC20",
                type: "address",
            },
        ],
        name: "calculateL2TokenAddress",
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
        inputs: [],
        name: "counterpartGateway",
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
        inputs: [],
        name: "defaultGateway",
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
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "finalizeInboundTransfer",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
        ],
        name: "getGateway",
        outputs: [
            {
                internalType: "address",
                name: "gateway",
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
                name: "_token",
                type: "address",
            },
            {
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "getOutboundCalldata",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_counterpartGateway",
                type: "address",
            },
            {
                internalType: "address",
                name: "_defaultGateway",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "l1TokenToGateway",
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
                name: "_l1Token",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "outboundTransfer",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_maxGas",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_gasPriceBid",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "outboundTransfer",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "postUpgradeInit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "router",
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
                name: "newL2DefaultGateway",
                type: "address",
            },
        ],
        name: "setDefaultGateway",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_l1Token",
                type: "address[]",
            },
            {
                internalType: "address[]",
                name: "_gateway",
                type: "address[]",
            },
        ],
        name: "setGateway",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5061103c806100206000396000f3fe6080604052600436106100bd5760003560e01c8063a0c76a961161006f578063a0c76a96146101a2578063a7e28d48146101c2578063bda009fe146101e2578063d2ce7d6514610202578063ed08fdc614610215578063f7c9362f1461024b578063f887ea401461026b57600080fd5b806303295802146100c25780632db09c1c146100f85780632e567b36146101185780634201f9851461012d578063485cc9551461014d5780637b3a3c8b1461016d57806395fcea781461018d575b600080fd5b3480156100ce57600080fd5b506003546100e2906001600160a01b031681565b6040516100ef9190610977565b60405180910390f35b34801561010457600080fd5b506000546100e2906001600160a01b031681565b61012b6101263660046109e8565b61028b565b005b34801561013957600080fd5b5061012b610148366004610b2f565b6102cf565b34801561015957600080fd5b5061012b610168366004610b92565b61043f565b61018061017b366004610bcb565b61044f565b6040516100ef9190610c8d565b34801561019957600080fd5b5061012b61046b565b3480156101ae57600080fd5b506101806101bd366004610cc7565b6104e3565b3480156101ce57600080fd5b506100e26101dd366004610d88565b610577565b3480156101ee57600080fd5b506100e26101fd366004610d88565b610610565b610180610210366004610da5565b610670565b34801561022157600080fd5b506100e2610230366004610d88565b6002602052600090815260409020546001600160a01b031681565b34801561025757600080fd5b5061012b610266366004610d88565b610770565b34801561027757600080fd5b506001546100e2906001600160a01b031681565b60405162461bcd60e51b815260206004820152601460248201527327a7262cafa7aaaa2127aaa7222fa927aaaa22a960611b60448201526064015b60405180910390fd5b6000546102ed906001600160a01b031661111161111160901b010190565b6001600160a01b0316336001600160a01b03161461031d5760405162461bcd60e51b81526004016102c690610e2a565b805182511461032e5761032e610e5c565b60005b825181101561043a5781818151811061034c5761034c610e72565b60200260200101516002600085848151811061036a5761036a610e72565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508181815181106103c8576103c8610e72565b60200260200101516001600160a01b03168382815181106103eb576103eb610e72565b60200260200101516001600160a01b03167f812ca95fe4492a9e2d1f2723c2c40c03a60a27b059581ae20ac4e4d73bfba35460405160405180910390a38061043281610e88565b915050610331565b505050565b61044b82600083610814565b5050565b60606104618686866000808888610670565b9695505050505050565b60006104957fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050336001600160a01b038216146104e05760405162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b60448201526064016102c6565b50565b606060006104f087610610565b604051635063b54b60e11b81529091506001600160a01b0382169063a0c76a9690610527908a908a908a908a908a90600401610eaf565b600060405180830381865afa158015610544573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261056c9190810190610eea565b979650505050505050565b60008061058383610610565b90506001600160a01b03811661059c5750600092915050565b6040516314fc51a960e31b81526001600160a01b0382169063a7e28d48906105c8908690600401610977565b602060405180830381865afa1580156105e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106099190610f60565b9392505050565b6001600160a01b03808216600090815260026020526040902054168061063e57506003546001600160a01b03165b6001600160a01b0381166001148061065e57506001600160a01b0381163b155b1561066b57506000919050565b919050565b6060600061067d89610610565b9050600061068c338686610886565b9050886001600160a01b0316336001600160a01b03168b6001600160a01b03167f85291dff2161a93c2f12c819d31889c96c63042116f5bc5a205aa701c2c429f5856040516106db9190610977565b60405180910390a460405163d2ce7d6560e01b81526001600160a01b0383169063d2ce7d6590349061071b908e908e908e908e908e908a90600401610f7d565b60006040518083038185885af1158015610739573d6000803e3d6000fd5b50505050506040513d6000823e601f3d908101601f191682016040526107629190810190610eea565b9a9950505050505050505050565b60005461078e906001600160a01b031661111161111160901b010190565b6001600160a01b0316336001600160a01b0316146107be5760405162461bcd60e51b81526004016102c690610e2a565b600380546001600160a01b0319166001600160a01b0383161790556040517f3a8f8eb961383a94d41d193e16a3af73eaddfd5764a4c640257323a1603ac33190610809908390610977565b60405180910390a150565b6001600160a01b038216156108585760405162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b60448201526064016102c6565b61086283836108b5565b600380546001600160a01b0319166001600160a01b03929092169190911790555050565b606083838360405160200161089d93929190610fc6565b60405160208183030381529060405290509392505050565b6001600160a01b0382166109015760405162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b60448201526064016102c6565b6000546001600160a01b0316156109495760405162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b60448201526064016102c6565b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b6001600160a01b0391909116815260200190565b6001600160a01b03811681146104e057600080fd5b60008083601f8401126109b257600080fd5b5081356001600160401b038111156109c957600080fd5b6020830191508360208285010111156109e157600080fd5b9250929050565b60008060008060008060a08789031215610a0157600080fd5b8635610a0c8161098b565b95506020870135610a1c8161098b565b94506040870135610a2c8161098b565b93506060870135925060808701356001600160401b03811115610a4e57600080fd5b610a5a89828a016109a0565b979a9699509497509295939492505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715610aaa57610aaa610a6c565b604052919050565b600082601f830112610ac357600080fd5b813560206001600160401b03821115610ade57610ade610a6c565b8160051b610aed828201610a82565b9283528481018201928281019087851115610b0757600080fd5b83870192505b8483101561056c578235610b208161098b565b82529183019190830190610b0d565b60008060408385031215610b4257600080fd5b82356001600160401b0380821115610b5957600080fd5b610b6586838701610ab2565b93506020850135915080821115610b7b57600080fd5b50610b8885828601610ab2565b9150509250929050565b60008060408385031215610ba557600080fd5b8235610bb08161098b565b91506020830135610bc08161098b565b809150509250929050565b600080600080600060808688031215610be357600080fd5b8535610bee8161098b565b94506020860135610bfe8161098b565b93506040860135925060608601356001600160401b03811115610c2057600080fd5b610c2c888289016109a0565b969995985093965092949392505050565b60005b83811015610c58578181015183820152602001610c40565b50506000910152565b60008151808452610c79816020860160208601610c3d565b601f01601f19169290920160200192915050565b6020815260006106096020830184610c61565b60006001600160401b03821115610cb957610cb9610a6c565b50601f01601f191660200190565b600080600080600060a08688031215610cdf57600080fd5b8535610cea8161098b565b94506020860135610cfa8161098b565b93506040860135610d0a8161098b565b92506060860135915060808601356001600160401b03811115610d2c57600080fd5b8601601f81018813610d3d57600080fd5b8035610d50610d4b82610ca0565b610a82565b818152896020838501011115610d6557600080fd5b816020840160208301376000602083830101528093505050509295509295909350565b600060208284031215610d9a57600080fd5b81356106098161098b565b600080600080600080600060c0888a031215610dc057600080fd5b8735610dcb8161098b565b96506020880135610ddb8161098b565b955060408801359450606088013593506080880135925060a08801356001600160401b03811115610e0b57600080fd5b610e178a828b016109a0565b989b979a50959850939692959293505050565b6020808252601890820152774f4e4c595f434f554e544552504152545f4741544557415960401b604082015260600190565b634e487b7160e01b600052600160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600060018201610ea857634e487b7160e01b600052601160045260246000fd5b5060010190565b6001600160a01b0386811682528581166020830152841660408201526060810183905260a06080820181905260009061056c90830184610c61565b600060208284031215610efc57600080fd5b81516001600160401b03811115610f1257600080fd5b8201601f81018413610f2357600080fd5b8051610f31610d4b82610ca0565b818152856020838501011115610f4657600080fd5b610f57826020830160208601610c3d565b95945050505050565b600060208284031215610f7257600080fd5b81516106098161098b565b600060018060a01b03808916835280881660208401525085604083015284606083015283608083015260c060a0830152610fba60c0830184610c61565b98975050505050505050565b6001600160a01b03841681526040602082018190528101829052818360608301376000818301606090810191909152601f909201601f191601019291505056fea26469706673582212206f9511a573b2eec4751d44c3c23b39f355351020adc36f193089deca48e79e3364736f6c63430008100033";
const isSuperArgs = (xs) => xs.length > 1;
class L2GatewayRouter__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "L2GatewayRouter";
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.L2GatewayRouter__factory = L2GatewayRouter__factory;
L2GatewayRouter__factory.bytecode = _bytecode;
L2GatewayRouter__factory.abi = _abi;
