import { Injectable } from "@nestjs/common";
import { CreatePrimaryDepartmentDto } from "./dto/create-primary-department.dto";
import { UpdatePrimaryDepartmentDto } from "./dto/update-primary-department.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { PrimaryDepartment } from "./entities/primary-department.entity";
import { Repository } from "typeorm";

@Injectable()
export class PrimaryDepartmentService {

  constructor(
    @InjectRepository(PrimaryDepartment)
    private readonly primaryDepartmentResponisy: Repository<PrimaryDepartment>
  ) {
  }

  create(createPrimaryDepartmentDto: CreatePrimaryDepartmentDto) {
    return "This action adds a new primaryDepartment";
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

  async getDepartmentById(hospitalId: number) {
    return await this.primaryDepartmentResponisy
      .createQueryBuilder("primaryDepartment")
      .where("primaryDepartment.hospital.hospital_id = :hospitalId", { hospitalId })
      .leftJoinAndSelect("primaryDepartment.secondaryDepartments", "secondaryDepartment")
      .getMany();
  }
}
