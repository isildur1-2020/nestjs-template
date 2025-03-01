import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfContractsService } from './type-of-contracts.service';

describe('TypeOfContractsService', () => {
  let service: TypeOfContractsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeOfContractsService],
    }).compile();

    service = module.get<TypeOfContractsService>(TypeOfContractsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
