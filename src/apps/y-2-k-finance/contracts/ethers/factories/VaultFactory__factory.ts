/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { VaultFactory, VaultFactoryInterface } from '../VaultFactory';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_treasury',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_weth',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_policy',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'AddressFactoryNotInController',
    type: 'error',
  },
  {
    inputs: [],
    name: 'AddressNotController',
    type: 'error',
  },
  {
    inputs: [],
    name: 'AddressZero',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ControllerAlreadySet',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ControllerNotSet',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'marketIndex',
        type: 'uint256',
      },
    ],
    name: 'MarketDoesNotExist',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotTimeLocker',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'marketEpochId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'mIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'startEpoch',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'endEpoch',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'hedge',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'risk',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'strikePrice',
        type: 'int256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'withdrawalFee',
        type: 'uint256',
      },
    ],
    name: 'EpochCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'mIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'hedge',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'risk',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'strikePrice',
        type: 'int256',
      },
    ],
    name: 'MarketCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: '_marketIndex',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'controller',
        type: 'address',
      },
    ],
    name: 'changedController',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_oracle',
        type: 'address',
      },
    ],
    name: 'changedOracle',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_treasury',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_marketIndex',
        type: 'uint256',
      },
    ],
    name: 'changedTreasury',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: '_marketIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_feeRate',
        type: 'uint256',
      },
    ],
    name: 'changedVaultFee',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'newController',
        type: 'address',
      },
    ],
    name: 'controllerSet',
    type: 'event',
  },
  {
    inputs: [],
    name: 'WETH',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_marketIndex',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_controller',
        type: 'address',
      },
    ],
    name: 'changeController',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_oracle',
        type: 'address',
      },
    ],
    name: 'changeOracle',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_treasury',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_marketIndex',
        type: 'uint256',
      },
    ],
    name: 'changeTreasury',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'controller',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_withdrawalFee',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'int256',
        name: '_strikePrice',
        type: 'int256',
      },
      {
        internalType: 'uint256',
        name: 'epochBegin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'epochEnd',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_oracle',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
    ],
    name: 'createNewMarket',
    outputs: [
      {
        internalType: 'address',
        name: 'insr',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'rsk',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'epochBegin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'epochEnd',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_withdrawalFee',
        type: 'uint256',
      },
    ],
    name: 'deployMoreAssets',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'getVaults',
    outputs: [
      {
        internalType: 'address[]',
        name: 'vaults',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'indexEpochs',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'indexVaults',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'marketIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_controller',
        type: 'address',
      },
    ],
    name: 'setController',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'timelocker',
    outputs: [
      {
        internalType: 'contract TimeLock',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'tokenToOracle',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'treasury',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class VaultFactory__factory {
  static readonly abi = _abi;
  static createInterface(): VaultFactoryInterface {
    return new utils.Interface(_abi) as VaultFactoryInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): VaultFactory {
    return new Contract(address, _abi, signerOrProvider) as VaultFactory;
  }
}
