import { Injectable } from "@nestjs/common";
import { CreateSecondaryDepartmentDto } from "./dto/create-secondary-department.dto";
import { UpdateSecondaryDepartmentDto } from "./dto/update-secondary-department.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { SecondaryDepartment } from "./entities/secondary-department.entity";
import { Repository } from "typeorm";

@Injectable()
export class SecondaryDepartmentService {

  constructor(
    @InjectRepository(SecondaryDepartment)
    private readonly secondaryDepartmentReponse: Repository<SecondaryDepartment>
  ) {
  }

  create(createSecondaryDepartmentDto: CreateSecondaryDepartmentDto) {
    return "This action adds a new secondaryDepartment";
  }

  getSecondaryDepartmentByName(name: string) {
    return this.secondaryDepartmentReponse.findOne({ where: { department_name: name } });
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
