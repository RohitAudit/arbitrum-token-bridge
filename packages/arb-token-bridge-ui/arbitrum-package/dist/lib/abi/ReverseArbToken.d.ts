import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ReverseArbTokenInterface extends utils.Interface {
    contractName: "ReverseArbToken";
    functions: {
        "bridgeBurn(address,uint256)": FunctionFragment;
        "bridgeMint(address,uint256)": FunctionFragment;
        "l1Address()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "bridgeBurn", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "bridgeMint", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "l1Address", values?: undefined): string;
    decodeFunctionResult(functionFragment: "bridgeBurn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgeMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l1Address", data: BytesLike): Result;
    events: {};
}
export interface ReverseArbToken extends BaseContract {
    contractName: "ReverseArbToken";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ReverseArbTokenInterface;
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
        bridgeBurn(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        bridgeMint(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        l1Address(overrides?: CallOverrides): Promise<[string]>;
    };
    bridgeBurn(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    bridgeMint(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    l1Address(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        bridgeBurn(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<void>;
        bridgeMint(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<void>;
        l1Address(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        bridgeBurn(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        bridgeMint(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        l1Address(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        bridgeBurn(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        bridgeMint(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        l1Address(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
