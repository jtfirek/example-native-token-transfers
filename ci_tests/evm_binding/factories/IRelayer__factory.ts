/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRelayer, IRelayerInterface } from "../IRelayer";

const _abi = [
  {
    type: "function",
    name: "replaceMessage",
    inputs: [
      {
        name: "originalMessage",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "originalAttestation",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "newMessageBody",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "newDestinationCaller",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "sendMessage",
    inputs: [
      {
        name: "destinationDomain",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "recipient",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "messageBody",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint64",
        internalType: "uint64",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "sendMessageWithCaller",
    inputs: [
      {
        name: "destinationDomain",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "recipient",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "destinationCaller",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "messageBody",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint64",
        internalType: "uint64",
      },
    ],
    stateMutability: "nonpayable",
  },
] as const;

export class IRelayer__factory {
  static readonly abi = _abi;
  static createInterface(): IRelayerInterface {
    return new utils.Interface(_abi) as IRelayerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRelayer {
    return new Contract(address, _abi, signerOrProvider) as IRelayer;
  }
}