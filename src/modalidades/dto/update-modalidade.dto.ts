import { PartialType } from '@nestjs/mapped-types';
import { CreateModalidadeDto } from './create-modalidade.dto';

export class UpdateModalidadeDto extends PartialType(CreateModalidadeDto) {}
