import { Injectable, Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { ContractFactory } from '~contract/contracts';
import { Network } from '~types/network.interface';

import {
  Controller__factory,
  Lock16Rewards__factory,
  Lock32Rewards__factory,
  RewardsFactory__factory,
  VaultFactory__factory,
  Y2KToken__factory,
} from './ethers';

// eslint-disable-next-line
type ContractOpts = { address: string; network: Network };

@Injectable()
export class Y2KFinanceContractFactory extends ContractFactory {
  constructor(@Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit) {
    super((network: Network) => appToolkit.getNetworkProvider(network));
  }

  controller({ address, network }: ContractOpts) {
    return Controller__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  lock16Rewards({ address, network }: ContractOpts) {
    return Lock16Rewards__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  lock32Rewards({ address, network }: ContractOpts) {
    return Lock32Rewards__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  rewardsFactory({ address, network }: ContractOpts) {
    return RewardsFactory__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  vaultFactory({ address, network }: ContractOpts) {
    return VaultFactory__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  y2KToken({ address, network }: ContractOpts) {
    return Y2KToken__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
}

export type { Controller } from './ethers';
export type { Lock16Rewards } from './ethers';
export type { Lock32Rewards } from './ethers';
export type { RewardsFactory } from './ethers';
export type { VaultFactory } from './ethers';
export type { Y2KToken } from './ethers';
