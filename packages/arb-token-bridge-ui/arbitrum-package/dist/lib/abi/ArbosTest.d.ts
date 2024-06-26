import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ArbosTestInterface extends utils.Interface {
    contractName: "ArbosTest";
    functions: {
        "burnArbGas(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "burnArbGas", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "burnArbGas", data: BytesLike): Result;
    events: {};
}
export interface ArbosTest extends BaseContract {
    contractName: "ArbosTest";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ArbosTestInterface;
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
        burnArbGas(gasAmount: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
    };
    burnArbGas(gasAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        burnArbGas(gasAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        burnArbGas(gasAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        burnArbGas(gasAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
