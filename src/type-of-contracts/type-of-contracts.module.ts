import { Module } from '@nestjs/common';
import { TypeOfContractsService } from './type-of-contracts.service';
import { TypeOfContractsController } from './type-of-contracts.controller';

@Module({
  controllers: [TypeOfContractsController],
  providers: [TypeOfContractsService],
})
export class TypeOfContractsModule {}
