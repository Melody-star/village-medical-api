import { Injectable } from '@nestjs/common';
import { CreatePrimaryDepartmentDto } from './dto/create-primary-department.dto';
import { UpdatePrimaryDepartmentDto } from './dto/update-primary-department.dto';

@Injectable()
export class PrimaryDepartmentService {
  create(createPrimaryDepartmentDto: CreatePrimaryDepartmentDto) {
    return 'This action adds a new primaryDepartment';
  }

  findAll() {
    return `This action returns all primaryDepartment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} primaryDepartment`;
  }

  update(id: number, updatePrimaryDepartmentDto: UpdatePrimaryDepartmentDto) {
    return `This action updates a #${id} primaryDepartment`;
  }

  remove(id: number) {
    return `This action removes a #${id} primaryDepartment`;
  }
}
