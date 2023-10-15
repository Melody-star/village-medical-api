import { PartialType } from '@nestjs/mapped-types';
import { CreatePrimaryDepartmentDto } from './create-primary-department.dto';

export class UpdatePrimaryDepartmentDto extends PartialType(CreatePrimaryDepartmentDto) {}
