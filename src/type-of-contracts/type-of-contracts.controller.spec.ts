import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfContractsController } from './type-of-contracts.controller';
import { TypeOfContractsService } from './type-of-contracts.service';

describe('TypeOfContractsController', () => {
  let controller: TypeOfContractsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeOfContractsController],
      providers: [TypeOfContractsService],
    }).compile();

    controller = module.get<TypeOfContractsController>(TypeOfContractsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
