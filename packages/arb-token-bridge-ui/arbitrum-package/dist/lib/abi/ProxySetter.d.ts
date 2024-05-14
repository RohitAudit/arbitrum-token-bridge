import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ProxySetterInterface extends utils.Interface {
    contractName: "ProxySetter";
    functions: {
        "beacon()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "beacon", values?: undefined): string;
    decodeFunctionResult(functionFragment: "beacon", data: BytesLike): Result;
    events: {};
}
export interface ProxySetter extends BaseContract {
    contractName: "ProxySetter";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProxySetterInterface;
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
        beacon(overrides?: CallOverrides): Promise<[string]>;
    };
    beacon(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        beacon(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        beacon(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        beacon(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
