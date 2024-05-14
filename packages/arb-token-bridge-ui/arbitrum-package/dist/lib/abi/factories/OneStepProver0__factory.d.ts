import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OneStepProver0, OneStepProver0Interface } from "../OneStepProver0";
type OneStepProver0ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OneStepProver0__factory extends ContractFactory {
    constructor(...args: OneStepProver0ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OneStepProver0>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OneStepProver0;
    connect(signer: Signer): OneStepProver0__factory;
    static readonly contractName: "OneStepProver0";
    readonly contractName: "OneStepProver0";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50612640806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063da78e7d114610030575b600080fd5b61004361003e366004611bc6565b61005a565b604051610051929190611dd8565b60405180910390f35b610062611a8e565b61006a611b37565b61007387612280565b915061008436879003870187612383565b90506000610095602087018761241a565b9050611b8161ffff82166100ac57506102bd61029f565b61ffff8216600114156100c257506102c861029f565b61ffff8216600f14156100d857506102cf61029f565b61ffff8216601014156100ee57506103fb61029f565b61ffff82166180091415610105575061049561029f565b61ffff821661800a141561011c575061054161029f565b61ffff821660111415610132575061062e61029f565b61ffff821661800314156101495750610a0f61029f565b61ffff821661800414156101605750610a4e61029f565b61ffff8216602014156101765750610aac61029f565b61ffff82166021141561018c5750610aee61029f565b61ffff8216602314156101a25750610b3361029f565b61ffff8216602414156101b85750610b5b61029f565b61ffff821661800214156101cf5750610b8b61029f565b61ffff8216601a14156101e55750610c2861029f565b61ffff8216601b14156101fb5750610c3561029f565b604161ffff8316108015906102155750604461ffff831611155b156102235750610ca461029f565b61ffff8216618005148061023c575061ffff8216618006145b1561024a5750610d9861029f565b61ffff821661800814156102615750610e6b61029f565b60405162461bcd60e51b815260206004820152600e60248201526d494e56414c49445f4f50434f444560901b60448201526064015b60405180910390fd5b6102b084848989898663ffffffff16565b5050965096945050505050565b505060029092525050565b5050505050565b60006102de8660600151610e7a565b9050600481515160068111156102f6576102f6611ca9565b141561031d578560025b9081600381111561031357610313611ca9565b81525050506102c8565b6006815151600681111561033357610333611ca9565b146103795760405162461bcd60e51b8152602060048201526016602482015275494e56414c49445f52455455524e5f50435f5459504560501b6044820152606401610296565b805160209081015190819081901c604082901c606083901c156103d75760405162461bcd60e51b8152602060048201526016602482015275494e56414c49445f52455455524e5f50435f4441544160501b6044820152606401610296565b63ffffffff92831660e08b015290821660c08a01521660a088015250505050505050565b61041261040786610f1a565b602087015190610f7d565b60006104218660600151610f8d565b905061043e6104338260400151610fd9565b602088015190610f7d565b61044e6104338260600151610fd9565b602084013563ffffffff811681146104785760405162461bcd60e51b81526004016102969061243e565b63ffffffff1660c08701525050600060e090940193909352505050565b6104a161040786610f1a565b6104b16104078660a00151610fd9565b6104c16104078560800151610fd9565b6020808401359081901c604082901c1561051d5760405162461bcd60e51b815260206004820152601a60248201527f4241445f43524f53535f4d4f44554c455f43414c4c5f444154410000000000006044820152606401610296565b63ffffffff90811660a08801521660c08601525050600060e0909301929092525050565b61054d61040786610f1a565b61055d6104078660a00151610fd9565b61056d6104078560800151610fd9565b600061057c8660600151610f8d565b9050806060015163ffffffff166000141561059957856002610300565b602084013563ffffffff811681146105f35760405162461bcd60e51b815260206004820152601d60248201527f4241445f43414c4c45525f494e5445524e414c5f43414c4c5f444154410000006044820152606401610296565b604082015163ffffffff1660a0880152606082015161061390829061247b565b63ffffffff1660c08801525050600060e08601525050505050565b600080610646610641886020015161100c565b611031565b90506000806000808060006106676040518060200160405280606081525090565b6106728b8b876110c2565b955093506106818b8b87611129565b90965094506106918b8b87611145565b955092506106a08b8b876110c2565b955091506106af8b8b87611129565b90975094506106bf8b8b8761117b565b6040516d21b0b6361034b73234b932b1ba1d60911b60208201526001600160c01b031960c088901b16602e8201526036810189905290965090915060009060560160408051601f19818403018152919052805160209182012091508d013581146107645760405162461bcd60e51b81526020600482015260166024820152754241445f43414c4c5f494e4449524543545f4441544160501b6044820152606401610296565b61077a826001600160401b03871686868c611255565b90508d6040015181146107c15760405162461bcd60e51b815260206004820152600f60248201526e10905117d51050931154d7d493d3d5608a1b6044820152606401610296565b826001600160401b03168963ffffffff16106107eb57505060028d52506102c89650505050505050565b5050505050600061080c604080518082019091526000808252602082015290565b6040805160208101909152606081526108268a8a86611129565b945092506108358a8a866112f7565b945091506108448a8a8661117b565b9450905060006108618263ffffffff808b1690879087906113f316565b90508681146108a65760405162461bcd60e51b815260206004820152601160248201527010905117d153115351539514d7d493d3d5607a1b6044820152606401610296565b8584146108d6578d60025b908160038111156108c4576108c4611ca9565b815250505050505050505050506102c8565b6004835160068111156108eb576108eb611ca9565b14156108f9578d60026108b1565b60058351600681111561090e5761090e611ca9565b141561096d576020830151985063ffffffff891689146109685760405162461bcd60e51b81526020600482015260156024820152744241445f46554e435f5245465f434f4e54454e545360581b6044820152606401610296565b6109a5565b60405162461bcd60e51b815260206004820152600d60248201526c4241445f454c454d5f5459504560981b6044820152606401610296565b50505050505050506109b961043387610f1a565b60006109c88760600151610f8d565b90506109e56109da8260400151610fd9565b602089015190610f7d565b6109f56109da8260600151610fd9565b5063ffffffff1660c0860152600060e08601525050505050565b602083013563ffffffff81168114610a395760405162461bcd60e51b81526004016102969061243e565b63ffffffff1660e09095019490945250505050565b6000610a60610641876020015161100c565b905063ffffffff811615610aa457602084013563ffffffff81168114610a985760405162461bcd60e51b81526004016102969061243e565b63ffffffff1660e08701525b505050505050565b6000610abb8660600151610f8d565b90506000610ad382602001518660200135868661148d565b6020880151909150610ae59082610f7d565b50505050505050565b6000610afd866020015161100c565b90506000610b0e8760600151610f8d565b9050610b2581602001518660200135848787611525565b602090910152505050505050565b6000610b4985600001518560200135858561148d565b6020870151909150610aa49082610f7d565b6000610b6a866020015161100c565b9050610b8185600001518560200135838686611525565b9094525050505050565b6000610b9a866020015161100c565b90506000610bab876020015161100c565b90506000610bbc886020015161100c565b905060006040518060800160405280838152602001886020013560001b8152602001610be785611031565b63ffffffff168152602001610bfb86611031565b63ffffffff168152509050610c1d818a606001516115bf90919063ffffffff16565b505050505050505050565b610aa4856020015161100c565b6000610c47610641876020015161100c565b90506000610c58876020015161100c565b90506000610c69886020015161100c565b905063ffffffff831615610c8b576020880151610c869082610f7d565b610c9a565b6020880151610c9a9083610f7d565b5050505050505050565b6000610cb3602085018561241a565b9050600061ffff821660411415610ccc57506000610d4f565b61ffff821660421415610ce157506001610d4f565b61ffff821660431415610cf657506002610d4f565b61ffff821660441415610d0b57506003610d4f565b60405162461bcd60e51b8152602060048201526019602482015278434f4e53545f505553485f494e56414c49445f4f50434f444560381b6044820152606401610296565b610ae56040518060400160405280836006811115610d6f57610d6f611ca9565b815260200187602001356001600160401b03168152508860200151610f7d90919063ffffffff16565b6040805180820190915260008082526020820152618005610dbc602086018661241a565b61ffff161415610dea57610dd3866020015161100c565b6040870151909150610de59082610f7d565b610aa4565b618006610dfa602086018661241a565b61ffff161415610e2357610e11866040015161100c565b6020870151909150610de59082610f7d565b60405162461bcd60e51b815260206004820152601c60248201527f4d4f56455f494e5445524e414c5f494e56414c49445f4f50434f4445000000006044820152606401610296565b6000610b4986602001516116a6565b610e82611b8b565b815151600114610ea45760405162461bcd60e51b8152600401610296906124a3565b81518051600090610eb757610eb76124ce565b6020026020010151905060006001600160401b03811115610eda57610eda611f00565b604051908082528060200260200182016040528015610f1357816020015b610f00611b8b565b815260200190600190039081610ef85790505b5090915290565b604080518082018252600080825260209182015260e083015160c084015160a090940151835180850185526006815263ffffffff90921694831b67ffffffff0000000016949094179390921b63ffffffff60401b16929092179181019190915290565b8151610f8990826116db565b5050565b610f95611b8b565b815151600114610fb75760405162461bcd60e51b8152600401610296906124a3565b81518051600090610fca57610fca6124ce565b60200260200101519050919050565b604080518082019091526000808252602082015250604080518082019091526000815263ffffffff909116602082015290565b6040805180820190915260008082526020820152815161102b906117a4565b92915050565b6020810151600090818351600681111561104d5761104d611ca9565b146110845760405162461bcd60e51b81526020600482015260076024820152662727aa2fa4999960c91b6044820152606401610296565b640100000000811061102b5760405162461bcd60e51b81526020600482015260076024820152662120a22fa4999960c91b6044820152606401610296565b600081815b6008811015611120576008836001600160401b0316901b92508585838181106110f2576110f26124ce565b919091013560f81c9390931792508161110a816124e4565b9250508080611118906124e4565b9150506110c7565b50935093915050565b600081816111388686846118ad565b9097909650945050505050565b60008184848281811061115a5761115a6124ce565b919091013560f81c9250819050611170816124e4565b915050935093915050565b604080516020810190915260608152816000611198868684611145565b92509050600060ff82166001600160401b038111156111b9576111b9611f00565b6040519080825280602002602001820160405280156111e2578160200160208202803683370190505b50905060005b8260ff168160ff16101561123957611201888886611129565b838360ff1681518110611216576112166124ce565b602002602001018196508281525050508080611231906124ff565b9150506111e8565b5060405180602001604052808281525093505050935093915050565b604051652a30b136329d60d11b60208201526001600160f81b031960f885901b1660268201526001600160c01b031960c084901b166027820152602f81018290526000908190604f016040516020818303038152906040528051906020012090506112ec878783604051806040016040528060128152602001712a30b136329036b2b935b632903a3932b29d60711b815250611902565b979650505050505050565b6040805180820190915260008082526020820152816000858583818110611320576113206124ce565b919091013560f81c9150829050611336816124e4565b925050611341600690565b600681111561135257611352611ca9565b60ff168160ff1611156113985760405162461bcd60e51b815260206004820152600e60248201526d4241445f56414c55455f5459504560901b6044820152606401610296565b60006113a58787856118ad565b809450819250505060405180604001604052808360ff1660068111156113cd576113cd611ca9565b60068111156113de576113de611ca9565b81526020018281525093505050935093915050565b60008083611400846119d4565b6040516d2a30b136329032b632b6b2b73a1d60911b6020820152602e810192909252604e820152606e016040516020818303038152906040528051906020012090506114838686836040518060400160405280601a81526020017f5461626c6520656c656d656e74206d65726b6c6520747265653a000000000000815250611902565b9695505050505050565b604080518082019091526000808252602082015260006114bd604080518082019091526000808252602082015290565b6040805160208101909152606081526114d78686856112f7565b935091506114e686868561117b565b9350905060006114f7828985611a0e565b90508881146115185760405162461bcd60e51b81526004016102969061251f565b5090979650505050505050565b6000611541604080518082019091526000808252602082015290565b60006115596040518060200160405280606081525090565b6115648686846112f7565b909350915061157486868461117b565b925090506000611585828a86611a0e565b90508981146115a65760405162461bcd60e51b81526004016102969061251f565b6115b1828a8a611a0e565b9a9950505050505050505050565b8151516000906115d090600161254a565b6001600160401b038111156115e7576115e7611f00565b60405190808252806020026020018201604052801561162057816020015b61160d611b8b565b8152602001906001900390816116055790505b50905060005b83515181101561167c578351805182908110611644576116446124ce565b602002602001015182828151811061165e5761165e6124ce565b60200260200101819052508080611674906124e4565b915050611626565b50818184600001515181518110611695576116956124ce565b602090810291909101015290915250565b6040805180820190915260008082526020820152815151516116d46116cc600183612562565b845190611a56565b9392505050565b8151516000906116ec90600161254a565b6001600160401b0381111561170357611703611f00565b60405190808252806020026020018201604052801561174857816020015b60408051808201909152600080825260208201528152602001906001900390816117215790505b50905060005b83515181101561167c57835180518290811061176c5761176c6124ce565b6020026020010151828281518110611786576117866124ce565b6020026020010181905250808061179c906124e4565b91505061174e565b6040805180820190915260008082526020820152815180516117c890600190612562565b815181106117d8576117d86124ce565b60200260200101519050600060018360000151516117f69190612562565b6001600160401b0381111561180d5761180d611f00565b60405190808252806020026020018201604052801561185257816020015b604080518082019091526000808252602082015281526020019060019003908161182b5790505b50905060005b8151811015610f13578351805182908110611875576118756124ce565b602002602001015182828151811061188f5761188f6124ce565b602002602001018190525080806118a5906124e4565b915050611858565b600081815b602081101561112057600883901b92508585838181106118d4576118d46124ce565b919091013560f81c939093179250816118ec816124e4565b92505080806118fa906124e4565b9150506118b2565b8160005b8551518110156119cb576001851661196757828287600001518381518110611930576119306124ce565b602002602001015160405160200161194a93929190612579565b6040516020818303038152906040528051906020012091506119b2565b828660000151828151811061197e5761197e6124ce565b60200260200101518360405160200161199993929190612579565b6040516020818303038152906040528051906020012091505b60019490941c93806119c3816124e4565b915050611906565b50949350505050565b6000816000015182602001516040516020016119f19291906125bf565b604051602081830303815290604052805190602001209050919050565b6000611a4e8484611a1e856119d4565b604051806040016040528060128152602001712b30b63ab29036b2b935b632903a3932b29d60711b815250611902565b949350505050565b60408051808201909152600080825260208201528251805183908110611a7e57611a7e6124ce565b6020026020010151905092915050565b6040805161012081019091528060008152602001611ac360408051606080820183529181019182529081526000602082015290565b8152602001611ae960408051606080820183529181019182529081526000602082015290565b8152602001611b0e604051806040016040528060608152602001600080191681525090565b815260006020820181905260408201819052606082018190526080820181905260a09091015290565b6040805160a0810182526000808252825160608101845281815260208181018390529381019190915290918201905b81526000602082018190526040820181905260609091015290565b611b896125f4565b565b6040805160c0810190915260006080820181815260a08301919091528190611b66565b600060408284031215611bc057600080fd5b50919050565b6000806000806000808688036101a0811215611be157600080fd5b611beb8989611bae565b965060408801356001600160401b0380821115611c0757600080fd5b90890190610120828c031215611c1c57600080fd5b81975060e0605f1984011215611c3157600080fd5b60608a019650611c458b6101408c01611bae565b95506101808a0135925080831115611c5c57600080fd5b828a0192508a601f840112611c7057600080fd5b8235915080821115611c8157600080fd5b50896020828401011115611c9457600080fd5b60208201935080925050509295509295509295565b634e487b7160e01b600052602160045260246000fd5b60048110611ccf57611ccf611ca9565b9052565b805160078110611ce557611ce5611ca9565b8252602090810151910152565b805160408084529051602084830181905281516060860181905260009392820191849160808801905b80841015611d4257611d2e828651611cd3565b938201936001939093019290850190611d1b565b509581015196019590955250919392505050565b8051604080845281518482018190526000926060916020918201918388019190865b82811015611dc1578451611d8d858251611cd3565b80830151858901528781015163ffffffff90811688870152908701511660808501529381019360a090930192600101611d78565b509687015197909601969096525093949350505050565b6000610100808352611ded8184018651611cbf565b602085015161012084810152611e07610220850182611cf2565b9050604086015160ff198086840301610140870152611e268383611cf2565b925060608801519150808684030161016087015250611e458282611d56565b915050608086015161018085015260a0860151611e6b6101a086018263ffffffff169052565b5060c086015163ffffffff81166101c08601525060e086015163ffffffff81166101e0860152509085015161020084015290506116d460208301848051825260208101516001600160401b0380825116602085015280602083015116604085015250604081015160608401525060408101516080830152606081015160a083015263ffffffff60808201511660c08301525050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715611f3857611f38611f00565b60405290565b604051602081016001600160401b0381118282101715611f3857611f38611f00565b604051608081016001600160401b0381118282101715611f3857611f38611f00565b60405161012081016001600160401b0381118282101715611f3857611f38611f00565b60405160a081016001600160401b0381118282101715611f3857611f38611f00565b604051606081016001600160401b0381118282101715611f3857611f38611f00565b604051601f8201601f191681016001600160401b038111828210171561201157612011611f00565b604052919050565b80356004811061202857600080fd5b919050565b60006001600160401b0382111561204657612046611f00565b5060051b60200190565b60006040828403121561206257600080fd5b61206a611f16565b905081356007811061207b57600080fd5b808252506020820135602082015292915050565b600060408083850312156120a257600080fd5b6120aa611f16565b915082356001600160401b03808211156120c357600080fd5b818501915060208083880312156120d957600080fd5b6120e1611f3e565b8335838111156120f057600080fd5b80850194505087601f85011261210557600080fd5b8335925061211a6121158461202d565b611fe9565b83815260069390931b8401820192828101908985111561213957600080fd5b948301945b8486101561215f576121508a87612050565b8252948601949083019061213e565b8252508552948501359484019490945250909392505050565b803563ffffffff8116811461202857600080fd5b6000604080838503121561219f57600080fd5b6121a7611f16565b915082356001600160401b038111156121bf57600080fd5b8301601f810185136121d057600080fd5b803560206121e06121158361202d565b82815260a092830284018201928282019190898511156121ff57600080fd5b948301945b848610156122685780868b03121561221c5760008081fd5b612224611f60565b61222e8b88612050565b815287870135858201526060612245818901612178565b8983015261225560808901612178565b9082015283529485019491830191612204565b50808752505080860135818601525050505092915050565b6000610120823603121561229357600080fd5b61229b611f82565b6122a483612019565b815260208301356001600160401b03808211156122c057600080fd5b6122cc3683870161208f565b602084015260408501359150808211156122e557600080fd5b6122f13683870161208f565b6040840152606085013591508082111561230a57600080fd5b506123173682860161218c565b6060830152506080830135608082015261233360a08401612178565b60a082015261234460c08401612178565b60c082015261235560e08401612178565b60e082015261010092830135928101929092525090565b80356001600160401b038116811461202857600080fd5b600081830360e081121561239657600080fd5b61239e611fa5565b833581526060601f19830112156123b457600080fd5b6123bc611fc7565b91506123ca6020850161236c565b82526123d86040850161236c565b6020830152606084013560408301528160208201526080840135604082015260a0840135606082015261240d60c08501612178565b6080820152949350505050565b60006020828403121561242c57600080fd5b813561ffff811681146116d457600080fd5b6020808252600d908201526c4241445f43414c4c5f4441544160981b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600063ffffffff80831681851680830382111561249a5761249a612465565b01949350505050565b6020808252601190820152700848288beae929c889eaebe988a9c8ea89607b1b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b60006000198214156124f8576124f8612465565b5060010190565b600060ff821660ff81141561251657612516612465565b60010192915050565b60208082526011908201527015d493d391d7d3515492d31157d493d3d5607a1b604082015260600190565b6000821982111561255d5761255d612465565b500190565b60008282101561257457612574612465565b500390565b6000845160005b8181101561259a5760208188018101518583015201612580565b818111156125a9576000828501525b5091909101928352506020820152604001919050565b652b30b63ab29d60d11b81526000600784106125dd576125dd611ca9565b5060f89290921b6006830152600782015260270190565b634e487b7160e01b600052605160045260246000fdfea26469706673582212203f2271c3e5769881154d88e0fa9f3325638e6fca9186f48a9e33cf2af0f7055364736f6c63430008090033";
    static readonly abi: {
        inputs: ({
            components: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: ({
                    components: ({
                        components: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        internalType: string;
                        name: string;
                        type: string;
                    } | {
                        internalType: string;
                        name: string;
                        type: string;
                        components?: undefined;
                    })[];
                    internalType: string;
                    name: string;
                    type: string;
                } | {
                    internalType: string;
                    name: string;
                    type: string;
                    components?: undefined;
                })[];
                internalType: string;
                name: string;
                type: string;
            })[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            components: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: ({
                    components: ({
                        components: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        internalType: string;
                        name: string;
                        type: string;
                    } | {
                        internalType: string;
                        name: string;
                        type: string;
                        components?: undefined;
                    })[];
                    internalType: string;
                    name: string;
                    type: string;
                } | {
                    internalType: string;
                    name: string;
                    type: string;
                    components?: undefined;
                })[];
                internalType: string;
                name: string;
                type: string;
            })[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): OneStepProver0Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): OneStepProver0;
}
export {};
