import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOfferJobDto } from './dto/create-offer-job.dto';
import { UpdateOfferJobDto } from './dto/update-offer-job.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { JobOffer } from './entities/offer-job.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OfferJobsService {
  constructor(
    @InjectRepository(JobOffer)
    private companyRepository: Repository<JobOffer>,
  ) {}

  async create(createOfferJobDto: CreateOfferJobDto) {
    try {
      const company = this.companyRepository.create(createOfferJobDto);
      const companyCreated = await this.companyRepository.save(company);
      return companyCreated;
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async findAll() {
    const companies = await this.companyRepository.find();
    return companies;
  }

  async findOne(id: number) {
    const company = await this.companyRepository.findOneBy({ id });
    return company;
  }

  async update(id: number, updateCompanyDto: UpdateOfferJobDto) {
    return await this.companyRepository.update({ id }, updateCompanyDto);
  }

  async remove(id: number) {
    await this.companyRepository.delete({ id });
  }
}
