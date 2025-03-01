import { Test, TestingModule } from '@nestjs/testing';
import { OfferJobsController } from './offer-jobs.controller';
import { OfferJobsService } from './offer-jobs.service';

describe('OfferJobsController', () => {
  let controller: OfferJobsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfferJobsController],
      providers: [OfferJobsService],
    }).compile();

    controller = module.get<OfferJobsController>(OfferJobsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
