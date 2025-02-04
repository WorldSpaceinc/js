/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface IFeeTierPlacementExtensionInterface extends utils.Interface {
  functions: {
    "getFeeTier(address,address)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "getFeeTier"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getFeeTier",
    values: [string, string]
  ): string;

  decodeFunctionResult(functionFragment: "getFeeTier", data: BytesLike): Result;

  events: {};
}

export interface IFeeTierPlacementExtension extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IFeeTierPlacementExtensionInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getFeeTier(
      deployer: string,
      proxy: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        tierId: BigNumber;
        validUntilTimestamp: BigNumber;
      }
    >;
  };

  getFeeTier(
    deployer: string,
    proxy: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      tierId: BigNumber;
      validUntilTimestamp: BigNumber;
    }
  >;

  callStatic: {
    getFeeTier(
      deployer: string,
      proxy: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        tierId: BigNumber;
        validUntilTimestamp: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    getFeeTier(
      deployer: string,
      proxy: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getFeeTier(
      deployer: string,
      proxy: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
