import { Injectable } from "@nestjs/common";
import { CreatePrescriptionDto } from "./dto/create-prescription.dto";
import { UpdatePrescriptionDto } from "./dto/update-prescription.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user/entities/user.entity";
import { Repository } from "typeorm";
import { PermissionService } from "../permission/permission.service";
import { Permission } from "../permission/entities/permission.entity";
import { Prescription } from "./entities/prescription.entity";

@Injectable()
export class PrescriptionService {

  constructor(
    @InjectRepository(Prescription)
    private readonly prescriptionRepository: Repository<Prescription>
  ) {
  }

  create(createPrescriptionDto: CreatePrescriptionDto) {
    return "This action adds a new prescription";
  }

  async findAll() {
    const result = await this.prescriptionRepository.find();
    return result;
  }

  findOne(id: number) {
    return this.prescriptionRepository.findOne({ where: { prescription_id: id }, relations: ["user"] });
  }

  update(id: number, updatePrescriptionDto: UpdatePrescriptionDto) {
    return `This action updates a #${id} prescription`;
  }

  remove(id: number) {
    return `This action removes a #${id} prescription`;
  }
}
