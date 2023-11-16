import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { PrescriptionService } from "./prescription.service";
import { CreatePrescriptionDto } from "./dto/create-prescription.dto";
import { UpdatePrescriptionDto } from "./dto/update-prescription.dto";
import { ApiOperation, ApiProperty, ApiTags } from "@nestjs/swagger";
import { InjectRepository } from "@nestjs/typeorm";
import { Prescription } from "./entities/prescription.entity";
import { Repository } from "typeorm";

@ApiTags("处方接口")
@Controller("prescription")
export class PrescriptionController {
  constructor(
    @InjectRepository(Prescription)
    private prescriptionRepository: Repository<Prescription>, private prescriptionService: PrescriptionService
  ) {
  }

  @ApiOperation({ summary: "获取所有处方信息" })
  @Get()
  findAll() {
    return this.prescriptionRepository.createQueryBuilder("prescription").leftJoinAndSelect("prescription.user", "user").getMany();
  }

  @ApiOperation({ summary: "根据ID获取处方信息" })
  @Get("getPrescriptionById")
  getPrescriptionById(@Query("id") id: number) {
    return this.prescriptionService.findOne(id);
  }
}
