import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeOfContractDto } from './create-type-of-contract.dto';

export class UpdateTypeOfContractDto extends PartialType(CreateTypeOfContractDto) {}
