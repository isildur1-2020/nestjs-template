import { Injectable } from '@nestjs/common';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { sectors } from 'src/utils/countries';

@Injectable()
export class SectorsService {
  create(createSectorDto: CreateSectorDto) {
    return 'This action adds a new sector';
  }

  findAll() {
    return sectors;
  }

  findOne(id: number) {
    return `This action returns a #${id} sector`;
  }

  update(id: number, updateSectorDto: UpdateSectorDto) {
    return `This action updates a #${id} sector`;
  }

  remove(id: number) {
    return `This action removes a #${id} sector`;
  }
}
