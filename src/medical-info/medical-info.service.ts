import { Injectable } from "@nestjs/common";
import { CreateMedicalInfoDto } from "./dto/create-medical-info.dto";
import { UpdateMedicalInfoDto } from "./dto/update-medical-info.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user/entities/user.entity";
import { Repository } from "typeorm";
import { PermissionService } from "../permission/permission.service";
import { MedicalInfo } from "./entities/medical-info.entity";
import { UserService } from "../user/user.service";

@Injectable()
export class MedicalInfoService {

  constructor(
    @InjectRepository(MedicalInfo)
    private readonly medicalInfoRepository: Repository<MedicalInfo>,
    private readonly userService: UserService
  ) {
  }

  async create(createMedicalInfoDto: CreateMedicalInfoDto) {
    // 生成随机的 12 位 medical_card_number
    const medical_card_number = this.generateRandomMedicalCardNumber(12);

    const user = await this.userService.getUserInfoById(+createMedicalInfoDto.userUserId);

    // 创建 MedicalInfo 实例并填充属性
    const medicalInfo = new MedicalInfo();
    medicalInfo.medical_card_number = medical_card_number;
    medicalInfo.id_card = createMedicalInfoDto.id_card;
    medicalInfo.name = createMedicalInfoDto.name;
    medicalInfo.user = user;
    medicalInfo.phone = createMedicalInfoDto.phone;
    medicalInfo.address = createMedicalInfoDto.address;

    // 保存到数据库
    return await this.medicalInfoRepository.save(medicalInfo);
  }

  findAll() {
    return this.medicalInfoRepository.find({ relations: ["user"] });
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalInfo`;
  }

  update(id: number, updateMedicalInfoDto: UpdateMedicalInfoDto) {
    return `This action updates a #${id} medicalInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalInfo`;
  }

  getMedicalInfoByUserId(userId: number) {
    return this.medicalInfoRepository.findOne({ where: { user: { user_id: userId } } });
  }

  private generateRandomMedicalCardNumber(length: number): string {
    let result = "";
    const characters = "0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }
    return result;
  }
}
