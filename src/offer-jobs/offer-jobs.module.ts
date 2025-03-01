import { Module } from '@nestjs/common';
import { OfferJobsService } from './offer-jobs.service';
import { OfferJobsController } from './offer-jobs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobOffer } from './entities/offer-job.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobOffer])],
  controllers: [OfferJobsController],
  providers: [OfferJobsService],
  exports: [OfferJobsService],
})
export class OfferJobsModule {}
