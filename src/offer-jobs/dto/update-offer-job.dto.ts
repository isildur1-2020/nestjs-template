import { PartialType } from '@nestjs/mapped-types';
import { CreateOfferJobDto } from './create-offer-job.dto';

export class UpdateOfferJobDto extends PartialType(CreateOfferJobDto) {}
