import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { L1OrbitCustomGateway, L1OrbitCustomGatewayInterface } from "../L1OrbitCustomGateway";
type L1OrbitCustomGatewayConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class L1OrbitCustomGateway__factory extends ContractFactory {
    constructor(...args: L1OrbitCustomGatewayConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<L1OrbitCustomGateway>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): L1OrbitCustomGateway;
    connect(signer: Signer): L1OrbitCustomGateway__factory;
    static readonly contractName: "L1OrbitCustomGateway";
    readonly contractName: "L1OrbitCustomGateway";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50612e91806100206000396000f3fe6080604052600436106101565760003560e01c806393e59dc1116100c1578063ca346d4a1161007a578063ca346d4a146103e6578063d2ce7d65146103f9578063f26bdead1461040c578063f68a90821461041a578063f887ea4014610448578063f8c8765e14610468578063fb0e722b1461048857600080fd5b806393e59dc11461030957806395fcea7814610329578063a0c76a961461033e578063a7e28d481461035e578063bcf2e6eb14610397578063bd5f3e7d146103c657600080fd5b806337daacad1161011357806337daacad146102335780633e8ee3df146102535780634fb1a07b1461027357806385f25597146102935780638a2dc014146102b35780638da5cb5b146102e957600080fd5b806301ffc9a71461015b578063020a60581461019057806313af4035146101be5780631d3a689f146101e05780632db09c1c146101f35780632e567b3614610220575b600080fd5b34801561016757600080fd5b5061017b610176366004611ff8565b6104a8565b60405190151581526020015b60405180910390f35b34801561019c57600080fd5b506101b06101ab366004612037565b6104df565b604051908152602001610187565b3480156101ca57600080fd5b506101de6101d9366004612067565b610524565b005b6101b06101ee3660046120c8565b6105bf565b3480156101ff57600080fd5b50600054610213906001600160a01b031681565b604051610187919061214e565b6101de61022e3660046121a3565b610604565b34801561023f57600080fd5b506101b061024e366004612227565b610646565b34801561025f57600080fd5b506101b061026e366004612285565b610661565b6102866102813660046122c9565b61067b565b60405161018791906123b0565b34801561029f57600080fd5b506101b06102ae3660046123c3565b6106c6565b3480156102bf57600080fd5b506102136102ce366004612067565b6004602052600090815260409020546001600160a01b031681565b3480156102f557600080fd5b50600554610213906001600160a01b031681565b34801561031557600080fd5b50600654610213906001600160a01b031681565b34801561033557600080fd5b506101de610710565b34801561034a57600080fd5b50610286610359366004612514565b610788565b34801561036a57600080fd5b50610213610379366004612067565b6001600160a01b039081166000908152600460205260409020541690565b3480156103a357600080fd5b506103b76103b2366004612592565b610802565b604051610187939291906125ab565b3480156103d257600080fd5b506101de6103e13660046125e0565b6108bb565b6101b06103f436600461267e565b610b1b565b6102866104073660046126d4565b610b35565b6101b06103f4366004612746565b34801561042657600080fd5b5061043a610435366004612781565b610b53565b6040516101879291906127d9565b34801561045457600080fd5b50600154610213906001600160a01b031681565b34801561047457600080fd5b506101de6104833660046127fd565b610c43565b34801561049457600080fd5b50600254610213906001600160a01b031681565b60006001600160e01b03198216634fb1a07b60e01b14806104d957506301ffc9a760e01b6001600160e01b03198316145b92915050565b600082826040516020016105069291909182526001600160a01b0316602082015260400190565b60405160208183030381529060405280519060200120905092915050565b6005546001600160a01b031633146105575760405162461bcd60e51b815260040161054e90612859565b60405180910390fd5b6001600160a01b03811661059d5760405162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22fa7aba722a960991b604482015260640161054e565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6005546000906001600160a01b031633146105ec5760405162461bcd60e51b815260040161054e90612859565b60405162461bcd60e51b815260040161054e9061287d565b6002600754036106265760405162461bcd60e51b815260040161054e906128ad565b6002600755610639868686868686610c7f565b5050600160075550505050565b6000610656878787878787610de7565b979650505050505050565b6000610671868686863387610646565b9695505050505050565b606060026007540361069f5760405162461bcd60e51b815260040161054e906128ad565b60026007556106b489898989898989896110df565b60016007559998505050505050505050565b6005546000906001600160a01b031633146106f35760405162461bcd60e51b815260040161054e90612859565b6107038989898989898989611334565b9998505050505050505050565b600061073a7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050336001600160a01b038216146107855760405162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b604482015260640161054e565b50565b60408051602081019091526000815260609063172b3d9b60e11b878787876107b08689611520565b6040516024016107c49594939291906128e4565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915291505095945050505050565b6003602052600090815260409020805460018201805460ff8316936101009093046001600160a01b03169291906108389061291f565b80601f01602080910402602001604051908101604052809291908181526020018280546108649061291f565b80156108b15780601f10610886576101008083540402835291602001916108b1565b820191906000526020600020905b81548152906001019060200180831161089457829003601f168201915b5050505050905083565b60006108d7888860405180602001604052806000815250610b53565b509050336001600160a01b038216146109285760405162461bcd60e51b81526020600482015260136024820152722727aa2fa2ac2822a1aa22a22fa9a2a72222a960691b604482015260640161054e565b83156109685760405162461bcd60e51b815260206004820152600f60248201526e1393d7d110551057d0531313d5d151608a1b604482015260640161054e565b6109aa88888888888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061154c92505050565b8115610ab7576001600160a01b0386163b6109f95760405162461bcd60e51b815260206004820152600f60248201526e1513d7d393d517d0d3d395149050d5608a1b604482015260640161054e565b604051630592e20760e41b81526000906001600160a01b0388169063592e207090610a2e9085908d9089908990600401612982565b6020604051808303816000875af1158015610a4d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7191906129aa565b905080610ab55760405162461bcd60e51b81526020600482015260126024820152711514905394d1915497d213d3d2d7d190525360721b604482015260640161054e565b505b87866001600160a01b0316826001600160a01b03167f56735ccb9dc7d2222ce4177fc3aea44c33882e2a2c73e0fb1c6b93c9c13a04d48888888860008b8b905011604051610b099594939291906129cc565b60405180910390a45050505050505050565b600060405162461bcd60e51b815260040161054e9061287d565b6060610b47888889898989898961067b565b98975050505050505050565b600060606000610b6386866104df565b600081815260036020526040902080549192509060ff1615610c32578060000160019054906101000a90046001600160a01b031681600101808054610ba79061291f565b80601f0160208091040260200160405190810160405280929190818152602001828054610bd39061291f565b8015610c205780601f10610bf557610100808354040283529160200191610c20565b820191906000526020600020905b815481529060010190602001808311610c0357829003601f168201915b50505050509050935093505050610c3b565b85859350935050505b935093915050565b610c4e8484846115de565b600580546001600160a01b039092166001600160a01b03199283161790556006805490911690555050600160075550565b6002546001600160a01b03166000610c9682611691565b9050336001600160a01b03821614610ce25760405162461bcd60e51b815260206004820152600f60248201526e4e4f545f46524f4d5f42524944474560881b604482015260640161054e565b6000610ced836116f5565b6000549091506001600160a01b03808316911614610d485760405162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015260640161054e565b600080610d558787611813565b915091508051600014610d7357506040805160208101909152600081525b610d7e828a83610b53565b509850610d8c8b8a8a61182e565b81896001600160a01b03168b6001600160a01b03167f891afe029c75c4f8c5855fc3480598bc5a53739344f6ae575bdb7ea2a79f56b38e8c604051610dd2929190612a08565b60405180910390a45050505050505050505050565b600060b160ff16336001600160a01b0316638e5f5ad16040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e509190612a21565b60ff1614610e925760405162461bcd60e51b815260206004820152600f60248201526e1393d517d0549097d1539050931151608a1b604482015260640161054e565b336000908152600460205260409020546001600160a01b03168015610f1257876001600160a01b0316816001600160a01b031614610f125760405162461bcd60e51b815260206004820152601b60248201527f4e4f5f5550444154455f544f5f444946464552454e545f414444520000000000604482015260640161054e565b5033600090815260046020908152604080832080546001600160a01b0319166001600160a01b038c161790558051600180825281830190925291828101908036833750506040805160018082528183019092529293506000929150602080830190803683370190505090503382600081518110610f9157610f91612a44565b60200260200101906001600160a01b031690816001600160a01b0316815250508881600081518110610fc557610fc5612a44565b60200260200101906001600160a01b031690816001600160a01b03168152505080600081518110610ff857610ff8612a44565b60200260200101516001600160a01b03168260008151811061101c5761101c612a44565b60200260200101516001600160a01b03167f0dd664a155dd89526bb019e22b00291bb7ca9d07ba3ec4a1a76b410da9797ceb60405160405180910390a3600063d4f5532f60e01b8383604051602401611076929190612a9e565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152600254600080549293506110d1926001600160a01b03928316921690899089908c8f8f89611847565b9a9950505050505050505050565b60606110ea3361185b565b6111285760405162461bcd60e51b815260206004820152600f60248201526e2727aa2fa32927a6afa927aaaa22a960891b604482015260640161054e565b60008060606000806111393361185b565b1561115257611148888861186f565b909550925061118f565b33945087878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050505b6111988361188b565b8151919550919350909150156111e65760405162461bcd60e51b8152602060048201526013602482015272115615149057d110551057d11254d050931151606a1b604482015260640161054e565b6001600160a01b038e163b61122f5760405162461bcd60e51b815260206004820152600f60248201526e130c57d393d517d0d3d395149050d5608a1b604482015260640161054e565b6001600160a01b038e811660009081526004602052604090205416806112895760405162461bcd60e51b815260206004820152600f60248201526e1393d7d30c97d513d2d15397d4d155608a1b604482015260640161054e565b6112948f878e6118b2565b9b506112a38f878f8f88610788565b96506112b58e878e8e8e88888e6119b5565b9450505050818a6001600160a01b0316846001600160a01b03167fb8910b9960c443aac3240b98585384e3a6f109fbf6969e264c3f183d69aba7e18f8d604051611300929190612a08565b60405180910390a4604080516020810184905201604051602081830303815290604052935050505098975050505050505050565b60008786146113775760405162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4c454e4754485360881b604482015260640161054e565b60005b888110156114a35787878281811061139457611394612a44565b90506020020160208101906113a99190612067565b600460008c8c858181106113bf576113bf612a44565b90506020020160208101906113d49190612067565b6001600160a01b039081168252602082019290925260400160002080546001600160a01b0319169290911691909117905587878281811061141757611417612a44565b905060200201602081019061142c9190612067565b6001600160a01b03168a8a8381811061144757611447612a44565b905060200201602081019061145c9190612067565b6001600160a01b03167f0dd664a155dd89526bb019e22b00291bb7ca9d07ba3ec4a1a76b410da9797ceb60405160405180910390a38061149b81612ad9565b91505061137a565b50600063d4f5532f60e01b8a8a8a8a6040516024016114c59493929190612b30565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152600254600080549293506110d1926001600160a01b0392831692169033908790898c8c89611847565b60608282604051602001611535929190612b57565b604051602081830303815290604052905092915050565b600061155885856104df565b6040805160608101825260018082526001600160a01b038781166020808501918252848601898152600088815260039092529590208451815492516001600160a81b0319909316901515610100600160a81b03191617610100929093169190910291909117815592519394509092908201906115d49082612bca565b5050505050505050565b6115e88383611a0a565b6001600160a01b03821661162b5760405162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015260640161054e565b6001600160a01b03811661166d5760405162461bcd60e51b81526020600482015260096024820152680848288be929c849eb60bb1b604482015260640161054e565b600280546001600160a01b0319166001600160a01b03929092169190911790555050565b6000816001600160a01b031663e78cea926040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d99190612c89565b60008061170183611691565b6001600160a01b031663ab5d89436040518163ffffffff1660e01b8152600401602060405180830381865afa15801561173e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117629190612c89565b90506000816001600160a01b03166380648b026040518163ffffffff1660e01b8152600401602060405180830381865afa1580156117a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117c89190612c89565b90506001600160a01b03811661180c5760405162461bcd60e51b81526020600482015260096024820152682727afa9a2a72222a960b91b604482015260640161054e565b9392505050565b6000606061182383850185612ca6565b909590945092505050565b6118426001600160a01b0384168383611acc565b505050565b60006110d18a8a8a8b8b8b8b8b8b8b611b22565b6001546001600160a01b0391821691161490565b6000606061187f83850185612cec565b915091505b9250929050565b600060606000838060200190518101906118a59190612d25565b9196909550909350915050565b600080846001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016118e1919061214e565b602060405180830381865afa1580156118fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119229190612db0565b90506119396001600160a01b038616853086611b94565b6040516370a0823160e01b81526000906001600160a01b038716906370a082319061196890309060040161214e565b602060405180830381865afa158015611985573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119a99190612db0565b90506106718282612dc9565b6000610703600260009054906101000a90046001600160a01b031660008054906101000a90046001600160a01b03168b8b87600060405180606001604052808c81526020018e81526020018d81525089611bd2565b6001600160a01b038216611a565760405162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015260640161054e565b6000546001600160a01b031615611a9e5760405162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015260640161054e565b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b6118428363a9059cbb60e01b8484604051602401611aeb929190612a08565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611bf2565b600080611b378c8c8c8c8c8c8c8c8c8c611cc4565b9050808b6001600160a01b03168a6001600160a01b03167fc1d1490cf25c3b40d600dfb27c7680340ed1ab901b7e8f3551280968a3b372b086604051611b7d91906123b0565b60405180910390a49b9a5050505050505050505050565b6040516001600160a01b0380851660248301528316604482015260648101829052611bcc9085906323b872dd60e01b90608401611aeb565b50505050565b600061070389898989898989600001518a602001518b604001518b611b22565b6000611c47826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611e789092919063ffffffff16565b8051909150156118425780806020019051810190611c6591906129aa565b6118425760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161054e565b600080611cd08c611691565b6001600160a01b031663e1758bd86040518163ffffffff1660e01b8152600401602060405180830381865afa158015611d0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d319190612c89565b90506000816001600160a01b03166370a082318e6040518263ffffffff1660e01b8152600401611d61919061214e565b602060405180830381865afa158015611d7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611da29190612db0565b905088811015611de8576000611db73361185b565b611dc15733611dc3565b8a5b9050611de6818f611dd4858e612dc9565b6001600160a01b038716929190611b94565b505b50508a6001600160a01b031663549e84268b88888d8d8a8a8f8b6040518a63ffffffff1660e01b8152600401611e2699989796959493929190612ddc565b6020604051808303816000875af1158015611e45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e699190612db0565b9b9a5050505050505050505050565b6060611e878484600085611e8f565b949350505050565b606082471015611ef05760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161054e565b600080866001600160a01b03168587604051611f0c9190612e3f565b60006040518083038185875af1925050503d8060008114611f49576040519150601f19603f3d011682016040523d82523d6000602084013e611f4e565b606091505b50915091506106568783838760608315611fc9578251600003611fc2576001600160a01b0385163b611fc25760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161054e565b5081611e87565b611e878383815115611fde5781518083602001fd5b8060405162461bcd60e51b815260040161054e91906123b0565b60006020828403121561200a57600080fd5b81356001600160e01b03198116811461180c57600080fd5b6001600160a01b038116811461078557600080fd5b6000806040838503121561204a57600080fd5b82359150602083013561205c81612022565b809150509250929050565b60006020828403121561207957600080fd5b813561180c81612022565b60008083601f84011261209657600080fd5b5081356001600160401b038111156120ad57600080fd5b6020830191508360208260051b850101111561188457600080fd5b600080600080600080600060a0888a0312156120e357600080fd5b87356001600160401b03808211156120fa57600080fd5b6121068b838c01612084565b909950975060208a013591508082111561211f57600080fd5b5061212c8a828b01612084565b989b979a50986040810135976060820135975060809091013595509350505050565b6001600160a01b0391909116815260200190565b60008083601f84011261217457600080fd5b5081356001600160401b0381111561218b57600080fd5b60208301915083602082850101111561188457600080fd5b60008060008060008060a087890312156121bc57600080fd5b86356121c781612022565b955060208701356121d781612022565b945060408701356121e781612022565b93506060870135925060808701356001600160401b0381111561220957600080fd5b61221589828a01612162565b979a9699509497509295939492505050565b60008060008060008060c0878903121561224057600080fd5b863561224b81612022565b9550602087013594506040870135935060608701359250608087013561227081612022565b8092505060a087013590509295509295509295565b600080600080600060a0868803121561229d57600080fd5b85356122a881612022565b97602087013597506040870135966060810135965060800135945092505050565b60008060008060008060008060e0898b0312156122e557600080fd5b88356122f081612022565b9750602089013561230081612022565b9650604089013561231081612022565b9550606089013594506080890135935060a0890135925060c08901356001600160401b0381111561234057600080fd5b61234c8b828c01612162565b999c989b5096995094979396929594505050565b60005b8381101561237b578181015183820152602001612363565b50506000910152565b6000815180845261239c816020860160208601612360565b601f01601f19169290920160200192915050565b60208152600061180c6020830184612384565b60008060008060008060008060c0898b0312156123df57600080fd5b88356001600160401b03808211156123f657600080fd5b6124028c838d01612084565b909a50985060208b013591508082111561241b57600080fd5b506124288b828c01612084565b999c989b5099604081013598606082013598506080820135975060a09091013595509350505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561248f5761248f612451565b604052919050565b60006001600160401b038211156124b0576124b0612451565b50601f01601f191660200190565b600082601f8301126124cf57600080fd5b81356124e26124dd82612497565b612467565b8181528460208386010111156124f757600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a0868803121561252c57600080fd5b853561253781612022565b9450602086013561254781612022565b9350604086013561255781612022565b92506060860135915060808601356001600160401b0381111561257957600080fd5b612585888289016124be565b9150509295509295909350565b6000602082840312156125a457600080fd5b5035919050565b83151581526001600160a01b03831660208201526060604082018190526000906125d790830184612384565b95945050505050565b600080600080600080600060a0888a0312156125fb57600080fd5b87359650602088013561260d81612022565b9550604088013561261d81612022565b945060608801356001600160401b038082111561263957600080fd5b6126458b838c01612162565b909650945060808a013591508082111561265e57600080fd5b5061266b8a828b01612162565b989b979a50959850939692959293505050565b600080600080600060a0868803121561269657600080fd5b85356126a181612022565b945060208601359350604086013592506060860135915060808601356126c681612022565b809150509295509295909350565b600080600080600080600060c0888a0312156126ef57600080fd5b87356126fa81612022565b9650602088013561270a81612022565b955060408801359450606088013593506080880135925060a08801356001600160401b0381111561273a57600080fd5b61266b8a828b01612162565b6000806000806080858703121561275c57600080fd5b843561276781612022565b966020860135965060408601359560600135945092505050565b60008060006060848603121561279657600080fd5b8335925060208401356127a881612022565b915060408401356001600160401b038111156127c357600080fd5b6127cf868287016124be565b9150509250925092565b6001600160a01b0383168152604060208201819052600090611e8790830184612384565b6000806000806080858703121561281357600080fd5b843561281e81612022565b9350602085013561282e81612022565b9250604085013561283e81612022565b9150606085013561284e81612022565b939692955090935050565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b6020808252601690820152751393d517d4d5541413d495115117d25397d3d490925560521b604082015260600190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b6001600160a01b0386811682528581166020830152841660408201526060810183905260a06080820181905260009061065690830184612384565b600181811c9082168061293357607f821691505b60208210810361295357634e487b7160e01b600052602260045260246000fd5b50919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60018060a01b0385168152836020820152606060408201526000610671606083018486612959565b6000602082840312156129bc57600080fd5b8151801515811461180c57600080fd5b6060815260006129e0606083018789612959565b82810360208401526129f3818688612959565b91505082151560408301529695505050505050565b6001600160a01b03929092168252602082015260400190565b600060208284031215612a3357600080fd5b815160ff8116811461180c57600080fd5b634e487b7160e01b600052603260045260246000fd5b600081518084526020808501945080840160005b83811015612a935781516001600160a01b031687529582019590820190600101612a6e565b509495945050505050565b604081526000612ab16040830185612a5a565b82810360208401526125d78185612a5a565b634e487b7160e01b600052601160045260246000fd5b600060018201612aeb57612aeb612ac3565b5060010190565b8183526000602080850194508260005b85811015612a93578135612b1581612022565b6001600160a01b031687529582019590820190600101612b02565b604081526000612b44604083018688612af2565b8281036020840152610656818587612af2565b604081526000612b6a6040830185612384565b82810360208401526125d78185612384565b601f82111561184257600081815260208120601f850160051c81016020861015612ba35750805b601f850160051c820191505b81811015612bc257828155600101612baf565b505050505050565b81516001600160401b03811115612be357612be3612451565b612bf781612bf1845461291f565b84612b7c565b602080601f831160018114612c2c5760008415612c145750858301515b600019600386901b1c1916600185901b178555612bc2565b600085815260208120601f198616915b82811015612c5b57888601518255948401946001909101908401612c3c565b5085821015612c795787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208284031215612c9b57600080fd5b815161180c81612022565b60008060408385031215612cb957600080fd5b8235915060208301356001600160401b03811115612cd657600080fd5b612ce2858286016124be565b9150509250929050565b60008060408385031215612cff57600080fd5b8235612d0a81612022565b915060208301356001600160401b03811115612cd657600080fd5b600080600060608486031215612d3a57600080fd5b8351925060208401516001600160401b03811115612d5757600080fd5b8401601f81018613612d6857600080fd5b8051612d766124dd82612497565b818152876020838501011115612d8b57600080fd5b612d9c826020830160208601612360565b809450505050604084015190509250925092565b600060208284031215612dc257600080fd5b5051919050565b818103818111156104d9576104d9612ac3565b600061012060018060a01b03808d1684528b60208501528a6040850152808a1660608501528089166080850152508660a08401528560c08401528460e084015280610100840152612e2f81840185612384565b9c9b505050505050505050505050565b60008251612e51818460208701612360565b919091019291505056fea2646970667358221220cdef7ca41fd0ff2a6acc62d66ca88ac84fe81e35eeb9158918fbdad9610acb7864736f6c63430008100033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): L1OrbitCustomGatewayInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): L1OrbitCustomGateway;
}
export {};