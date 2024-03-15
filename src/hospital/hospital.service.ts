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

  async create(createHospitalDto: CreateHospitalDto) {
    let hosptal = new Hospital();
    hosptal.hospital_name = createHospitalDto.name;
    hosptal.hospital_city = createHospitalDto.city;
    hosptal.hospital_address = createHospitalDto.address;
    hosptal.hospital_image = createHospitalDto.image;
    hosptal.hospital_level = createHospitalDto.level;
    return await this.hospitalRepository.save(hosptal);
  }

  findAll() {
    return this.hospitalRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} hospital`;
  }

  async update(id: number, updateHospitalDto: UpdateHospitalDto) {
    const hospital = await this.hospitalRepository.findOne({ where: { hospital_id: id } });
    hospital.hospital_level = updateHospitalDto.level
    hospital.hospital_image = updateHospitalDto.image
    hospital.hospital_address = updateHospitalDto.address
    hospital.hospital_name = updateHospitalDto.name
    hospital.hospital_city = updateHospitalDto.city
    return this.hospitalRepository.save(hospital)
  }

  remove(id: number) {
    return this.hospitalRepository.delete({ hospital_id: id });
  }

  getHospitalByCity(cityName: any) {
    return this.hospitalRepository.find({ where: { hospital_city: cityName } });
  }
}
