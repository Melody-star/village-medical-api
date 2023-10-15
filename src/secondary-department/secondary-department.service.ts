import { Injectable } from '@nestjs/common';
import { CreateSecondaryDepartmentDto } from './dto/create-secondary-department.dto';
import { UpdateSecondaryDepartmentDto } from './dto/update-secondary-department.dto';

@Injectable()
export class SecondaryDepartmentService {
  create(createSecondaryDepartmentDto: CreateSecondaryDepartmentDto) {
    return 'This action adds a new secondaryDepartment';
  }

  findAll() {
    return `This action returns all secondaryDepartment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} secondaryDepartment`;
  }

  update(id: number, updateSecondaryDepartmentDto: UpdateSecondaryDepartmentDto) {
    return `This action updates a #${id} secondaryDepartment`;
  }

  remove(id: number) {
    return `This action removes a #${id} secondaryDepartment`;
  }
}
