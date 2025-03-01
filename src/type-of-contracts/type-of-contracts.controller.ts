import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypeOfContractsService } from './type-of-contracts.service';
import { CreateTypeOfContractDto } from './dto/create-type-of-contract.dto';
import { UpdateTypeOfContractDto } from './dto/update-type-of-contract.dto';

@Controller('type-of-contracts')
export class TypeOfContractsController {
  constructor(
    private readonly typeOfContractsService: TypeOfContractsService,
  ) {}

  @Post()
  create(@Body() createTypeOfContractDto: CreateTypeOfContractDto) {
    return this.typeOfContractsService.create(createTypeOfContractDto);
  }

  @Get()
  findAll() {
    return this.typeOfContractsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeOfContractsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypeOfContractDto: UpdateTypeOfContractDto,
  ) {
    return this.typeOfContractsService.update(+id, updateTypeOfContractDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeOfContractsService.remove(+id);
  }
}
