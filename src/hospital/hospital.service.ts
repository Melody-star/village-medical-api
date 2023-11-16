import { Injectable } from "@nestjs/common";
import { CreateHospitalDto } from "./dto/create-hospital.dto";
import { UpdateHospitalDto } from "./dto/update-hospital.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Hospital } from "./entities/hospital.entity";
import { Repository } from "typeorm";

@Injectable()
export class HospitalService {

  constructor(
    @InjectRepository(Hospital)
    private readonly hospitalRepository: Repository<Hospital>
  ) {
  }

  getHospitalByName(name: string) {
    return this.hospitalRepository.findOne({ where: { hospital_name: name } });
  }

  create(createHospitalDto: CreateHospitalDto) {
    return "This action adds a new hospital";
  }

  findAll() {
    return this.hospitalRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} hospital`;
  }

  update(id: number, updateHospitalDto: UpdateHospitalDto) {
    return `This action updates a #${id} hospital`;
  }

  remove(id: number) {
    return `This action removes a #${id} hospital`;
  }

  getHospitalByCity(cityName: any) {
    return this.hospitalRepository.find({ where: { hospital_city: cityName } });
  }
}
