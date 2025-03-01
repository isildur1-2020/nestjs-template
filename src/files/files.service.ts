import { BadRequestException, Injectable } from '@nestjs/common';

import { UpdateFileDto } from './dto/update-file.dto';
import { filePath } from 'src/utils/countries';

@Injectable()
export class FilesService {
  create(file: Express.Multer.File): string {
    try {
      if (!file) {
        throw new BadRequestException('The photo file is required');
      }
      const picturePath = `${filePath.profilePictures}/${file.filename}`;
      console.log('Profile picture created successfully');
      return picturePath;
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err);
    }
  }

  findAll() {
    return `This action returns all files`;
  }

  findOne(id: number) {
    return `This action returns a #${id} file`;
  }

  update(id: number, updateFileDto: UpdateFileDto) {
    return `This action updates a #${id} file`;
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }
}
