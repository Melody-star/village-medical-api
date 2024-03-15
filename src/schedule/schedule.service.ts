import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from "./entities/schedule.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserService } from "../user/user.service";

@Injectable()
export class ScheduleService {

  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRep:Repository<Schedule>,
    private readonly userService:UserService
  ) {
  }

  async create(createScheduleDto: CreateScheduleDto) {
    const user = await this.userService.getUserInfoById(+ createScheduleDto.doctorId)
    let a = new Schedule()
    a.date = createScheduleDto.date
    a.user = user
    return this.scheduleRep.save(a)
  }

  findAll() {
    return this.scheduleRep.find({relations:["user"]})
  }

  findOne(id: number) {
    return `This action returns a #${id} schedule`;
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return `This action updates a #${id} schedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }
}
