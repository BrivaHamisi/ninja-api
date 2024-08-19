import { PartialType } from '@nestjs/mapped-types';
import { createNinjaDto } from './create-ninja.dto';

export class UpdateNinjaDto extends PartialType(createNinjaDto) {}
