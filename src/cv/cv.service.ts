import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Candidate } from './entities/cv.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CvService {
  constructor(
    @InjectRepository(Candidate)
    private companyRepository: Repository<Candidate>,
  ) {}

  async create(createCompanyDto: CreateCvDto) {
    try {
      const company = this.companyRepository.create(createCompanyDto);
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

  async update(id: number, updateCompanyDto: UpdateCvDto) {
    return await this.companyRepository.update({ id }, updateCompanyDto);
  }

  async remove(id: number) {
    await this.companyRepository.delete({ id });
  }
}
