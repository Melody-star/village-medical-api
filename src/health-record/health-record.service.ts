import { Injectable } from "@nestjs/common";
import { CreateHealthRecordDto } from "./dto/create-health-record.dto";
import { UpdateHealthRecordDto } from "./dto/update-health-record.dto";
import { HealthRecord } from "./entities/health-record.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserService } from "../user/user.service";

@Injectable()
export class HealthRecordService {

  constructor(
    @InjectRepository(HealthRecord)
    private readonly healthRecordService: Repository<HealthRecord>,
    private readonly userService: UserService
  ) {
  }

  async create(createHealthRecordDto: CreateHealthRecordDto) {
    const userInfo = await this.userService.getUserInfoById(+createHealthRecordDto.userId);
    createHealthRecordDto.user = userInfo;
    return this.healthRecordService.save(createHealthRecordDto);
  }

  findAll() {
    return `This action returns all healthRecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} healthRecord`;
  }

  update(id: number, updateHealthRecordDto: UpdateHealthRecordDto) {
    return `This action updates a #${id} healthRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} healthRecord`;
  }

  async getHealthRecordByUserId(userId: number) {
    const userInfo = await this.userService.getUserInfoById(userId);
    return this.healthRecordService.findOne({ where: { user: userInfo } });
  }
}
