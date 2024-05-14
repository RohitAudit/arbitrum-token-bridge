import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BeaconProxyFactory, BeaconProxyFactoryInterface } from "../BeaconProxyFactory";
type BeaconProxyFactoryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BeaconProxyFactory__factory extends ContractFactory {
    constructor(...args: BeaconProxyFactoryConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BeaconProxyFactory>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BeaconProxyFactory;
    connect(signer: Signer): BeaconProxyFactory__factory;
    static readonly contractName: "BeaconProxyFactory";
    readonly contractName: "BeaconProxyFactory";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610c94806100206000396000f3fe60806040523480156200001157600080fd5b5060043610620000765760003560e01c806329a5c5cf146200007b578063396a5f9514620000af57806359659e9014620000c657806397881f8d14620000da578063b3e3bf4214620000f3578063c4d66de8146200010a578063e75b21411462000123575b600080fd5b620000926200008c36600462000354565b6200013a565b6040516001600160a01b0390911681526020015b60405180910390f35b62000092620000c036600462000354565b62000186565b60005462000092906001600160a01b031681565b620000e4620001c7565b604051908152602001620000a6565b620000e4620001043660046200038b565b620001f6565b620001216200011b366004620003b8565b62000233565b005b62000092620001343660046200038b565b620002ec565b600080620001493384620001f6565b90506000816040516200015c9062000346565b8190604051809103906000f59050801580156200017d573d6000803e3d6000fd5b50949350505050565b6000620001c182604051806020016200019f9062000346565b6020820181038252601f19601f8201166040525080519060200120306200031c565b92915050565b604051620001d86020820162000346565b6020820181038252601f19601f820116604052508051906020012081565b604080516001600160a01b038416602082015290810182905260009060600160405160208183030381529060405280519060200120905092915050565b6001600160a01b038116620002805760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa122a0a1a7a760911b60448201526064015b60405180910390fd5b6000546001600160a01b031615620002ca5760405162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015260640162000277565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b600080620002fb8484620001f6565b90506200031481604051806020016200019f9062000346565b949350505050565b6000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b61088180620003de83390190565b6000602082840312156200036757600080fd5b5035919050565b80356001600160a01b03811681146200038657600080fd5b919050565b600080604083850312156200039f57600080fd5b620003aa836200036e565b946020939093013593505050565b600060208284031215620003cb57600080fd5b620003d6826200036e565b939250505056fe608060405234801561001057600080fd5b50336001600160a01b03166359659e906040518163ffffffff1660e01b8152600401602060405180830381865afa15801561004f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610073919061046c565b604051806020016040528060008152506100958282600061009c60201b60201c565b5050610508565b6100a583610167565b6040516001600160a01b038416907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a26000825111806100e65750805b1561016257610160836001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561012c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610150919061046c565b8361030a60201b6100291760201c565b505b505050565b61017a8161033660201b6100551760201c565b6101d95760405162461bcd60e51b815260206004820152602560248201527f455243313936373a206e657720626561636f6e206973206e6f74206120636f6e6044820152641d1c9858dd60da1b60648201526084015b60405180910390fd5b61024d816001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561021a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023e919061046c565b61033660201b6100551760201c565b6102b25760405162461bcd60e51b815260206004820152603060248201527f455243313936373a20626561636f6e20696d706c656d656e746174696f6e206960448201526f1cc81b9bdd08184818dbdb9d1c9858dd60821b60648201526084016101d0565b806102e97fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5060001b61034560201b6100641760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b606061032f838360405180606001604052806027815260200161085a60279139610348565b9392505050565b6001600160a01b03163b151590565b90565b6060600080856001600160a01b03168560405161036591906104b9565b600060405180830381855af49150503d80600081146103a0576040519150601f19603f3d011682016040523d82523d6000602084013e6103a5565b606091505b5090925090506103b7868383876103c1565b9695505050505050565b60608315610430578251600003610429576001600160a01b0385163b6104295760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101d0565b508161043a565b61043a8383610442565b949350505050565b8151156104525781518083602001fd5b8060405162461bcd60e51b81526004016101d091906104d5565b60006020828403121561047e57600080fd5b81516001600160a01b038116811461032f57600080fd5b60005b838110156104b0578181015183820152602001610498565b50506000910152565b600082516104cb818460208701610495565b9190910192915050565b60208152600082518060208401526104f4816040850160208701610495565b601f01601f19169190910160400192915050565b610343806105176000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610067565b610100565b565b606061004e83836040518060600160405280602781526020016102e760279139610124565b9392505050565b6001600160a01b03163b151590565b90565b600061009a7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50546001600160a01b031690565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100fb919061024a565b905090565b3660008037600080366000845af43d6000803e80801561011f573d6000f35b3d6000fd5b6060600080856001600160a01b0316856040516101419190610297565b600060405180830381855af49150503d806000811461017c576040519150601f19603f3d011682016040523d82523d6000602084013e610181565b606091505b50915091506101928683838761019c565b9695505050505050565b6060831561020e578251600003610207576101b685610055565b6102075760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b5081610218565b6102188383610220565b949350505050565b8151156102305781518083602001fd5b8060405162461bcd60e51b81526004016101fe91906102b3565b60006020828403121561025c57600080fd5b81516001600160a01b038116811461004e57600080fd5b60005b8381101561028e578181015183820152602001610276565b50506000910152565b600082516102a9818460208701610273565b9190910192915050565b60208152600082518060208401526102d2816040850160208701610273565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220e9bed491ce4cc7495def60dc616a13f39ccd912637e0c8ba02d45400506de9c064736f6c63430008100033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220237fb73aef7b871fb5f0c1ef15f58a63a1b7502356cc319c2d83ad0717d2cd7264736f6c63430008100033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): BeaconProxyFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BeaconProxyFactory;
}
export {};
