import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicalInfoDto } from './create-medical-info.dto';

export class UpdateMedicalInfoDto extends PartialType(CreateMedicalInfoDto) {}
