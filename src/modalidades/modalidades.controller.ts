import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ModalidadesService } from './modalidades.service';
import { CreateModalidadeDto } from './dto/create-modalidade.dto';
import { UpdateModalidadeDto } from './dto/update-modalidade.dto';

@Controller('modalities')
export class ModalidadesController {
  constructor(private readonly modalidadesService: ModalidadesService) {}

  @Post()
  create(@Body() createModalidadeDto: CreateModalidadeDto) {
    return this.modalidadesService.create(createModalidadeDto);
  }

  @Get()
  findAll() {
    return this.modalidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modalidadesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateModalidadeDto: UpdateModalidadeDto,
  ) {
    return this.modalidadesService.update(+id, updateModalidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modalidadesService.remove(+id);
  }
}
