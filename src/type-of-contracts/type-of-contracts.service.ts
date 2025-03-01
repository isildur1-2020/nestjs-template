import { Injectable } from '@nestjs/common';
import { CreateTypeOfContractDto } from './dto/create-type-of-contract.dto';
import { UpdateTypeOfContractDto } from './dto/update-type-of-contract.dto';
import { typeOfContract } from 'src/utils/countries';

@Injectable()
export class TypeOfContractsService {
  create(createTypeOfContractDto: CreateTypeOfContractDto) {
    return 'This action adds a new typeOfContract';
  }

  findAll() {
    return typeOfContract;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeOfContract`;
  }

  update(id: number, updateTypeOfContractDto: UpdateTypeOfContractDto) {
    return `This action updates a #${id} typeOfContract`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeOfContract`;
  }
}
