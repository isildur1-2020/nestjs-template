import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
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

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return await this.companyRepository.update({ id }, updateCompanyDto);
  }

  async remove(id: number) {
    await this.companyRepository.delete({ id });
  }
}
