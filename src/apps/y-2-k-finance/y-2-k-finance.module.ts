import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { ArbitrumY2KFinanceFarmContractPositionFetcher } from './arbitrum/y-2-k-finance.farm.contract-position-fetcher';
import { ArbitrumY2KFinanceLockContractPositionFetcher } from './arbitrum/y-2-k-finance.lock.contract-position-fetcher';
import { ArbitrumY2KFinanceTokenTokenFetcher } from './arbitrum/y-2-k-finance.token.token-fetcher';
import { Y2KFinanceContractFactory } from './contracts';

@Module({
  providers: [
    ArbitrumY2KFinanceFarmContractPositionFetcher,
    ArbitrumY2KFinanceLockContractPositionFetcher,
    ArbitrumY2KFinanceTokenTokenFetcher,
    Y2KFinanceContractFactory,
  ],
})
export class Y2KFinanceAppModule extends AbstractApp() {}
