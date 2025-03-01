import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OfferJobsService } from './offer-jobs.service';
import { CreateOfferJobDto } from './dto/create-offer-job.dto';
import { UpdateOfferJobDto } from './dto/update-offer-job.dto';

@Controller('offer-jobs')
export class OfferJobsController {
  constructor(private readonly offerJobsService: OfferJobsService) {}

  @Post()
  create(@Body() createOfferJobDto: CreateOfferJobDto) {
    return this.offerJobsService.create(createOfferJobDto);
  }

  @Get()
  findAll() {
    return this.offerJobsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offerJobsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOfferJobDto: UpdateOfferJobDto,
  ) {
    return this.offerJobsService.update(+id, updateOfferJobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offerJobsService.remove(+id);
  }
}
