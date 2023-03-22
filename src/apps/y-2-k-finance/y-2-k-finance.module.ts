import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { Y2KFinanceContractFactory } from './contracts';

@Module({
  providers: [Y2KFinanceContractFactory],
})
export class Y2KFinanceAppModule extends AbstractApp() {}
