import { Test, TestingModule } from '@nestjs/testing';
import { OfferJobsService } from './offer-jobs.service';

describe('OfferJobsService', () => {
  let service: OfferJobsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfferJobsService],
    }).compile();

    service = module.get<OfferJobsService>(OfferJobsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
