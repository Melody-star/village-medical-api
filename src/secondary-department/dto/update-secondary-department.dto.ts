import { PartialType } from '@nestjs/mapped-types';
import { CreateSecondaryDepartmentDto } from './create-secondary-department.dto';

export class UpdateSecondaryDepartmentDto extends PartialType(CreateSecondaryDepartmentDto) {}
