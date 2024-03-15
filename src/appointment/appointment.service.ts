import { Injectable } from "@nestjs/common";
import { CreateAppointmentDto } from "./dto/create-appointment.dto";
import { UpdateAppointmentDto } from "./dto/update-appointment.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Appointment } from "./entities/appointment.entity";
import { Repository } from "typeorm";
import { UserService } from "../user/user.service";
import { HospitalService } from "../hospital/hospital.service";
import { SecondaryDepartmentService } from "../secondary-department/secondary-department.service";
import axios from "axios";
import { MedicalInfoService } from "../medical-info/medical-info.service";

@Injectable()
export class AppointmentService {

  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepository: Repository<Appointment>,
    private readonly userService: UserService,
    private readonly hospitalService: HospitalService,
    private readonly secondaryDepartmentService: SecondaryDepartmentService,
    private readonly medicalInfoService: MedicalInfoService
  ) {
  }

  async create(createAppointmentDto: CreateAppointmentDto) {
    // 查询信息
    const userInfo = await this.userService.getUserInfoById(+createAppointmentDto.userId);
    const doctorInfo = await this.userService.getUserInfoById(+createAppointmentDto.doctorId);
    const hospial = await this.hospitalService.getHospitalByName(createAppointmentDto.hospitalName);
    const secondaryDepartment = await this.secondaryDepartmentService
      .getSecondaryDepartmentByName((createAppointmentDto.secondaryDepartment));
    const medicalInfo = await this.medicalInfoService.getMedicalInfoByUserId(+createAppointmentDto.userId);

    // 生成随机值
    const medical_code = this.generateRegistrationNumber(6);
    const medical_order_number = this.generateRegistrationNumber(12);

    // 插入信息
    let appointment = new Appointment();
    appointment.user = userInfo;
    appointment.doctor = doctorInfo;
    appointment.hospital = hospial;
    appointment.secondaryDepartment = secondaryDepartment;
    appointment.appointment_time = createAppointmentDto.appointmentTime;
    appointment.registration_fee = createAppointmentDto.registrationFee;
    appointment.medical_code = medical_code;
    appointment.medical_order_number = medical_order_number;
    const result = await this.appointmentRepository.save(appointment);

    // 发送订阅消息
    const template_id = "NsWDcXJNVaJ8U2UxYZCuzFpJkurt61434lAtLg-bFRk";
    const data = {
      "name1": {
        "value": medicalInfo.name
      },
      "date2": {
        "value": createAppointmentDto.appointmentTime
      },
      "thing9": {
        "value": hospial.hospital_name
      },
      "thing4": {
        "value": "请及时就诊"
      }
    };
    await this.sendSubscribe(userInfo.openid, data, template_id);
    return result;
  }

  // 发送订阅消息
  async sendSubscribe(openid, data, template_id) {
    // 获取access_token
    const res = await axios.get("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxa9960a74471f1524&secret=2e2305791eea7c8933f5b08d08bc45b4");
    const access_token = res.data.access_token;

    const subRes = await axios.post("https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=" + access_token,
      {
        "touser": openid,
        "template_id": template_id,
        "page": "index",
        "data": data
      });

    console.log("发送订阅消息结果", subRes.statusText);
  }

  // 用于生成医院单号
  generateRegistrationNumber(length: number): string {
    if (length <= 0) {
      throw new Error("Length should be a positive number");
    }

    const characters = "0123456789"; // 可自定义字符集
    const charactersLength = characters.length;
    let registrationNumber = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      registrationNumber += characters.charAt(randomIndex);
    }

    return registrationNumber;
  }

  findAll() {
    return `This action returns all appointment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appointment`;
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} appointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointment`;
  }

  async getAppointmentByUserId(id: string) {
    const user = await this.userService.getUserInfoById(+id);
    return this.appointmentRepository.find({
      where: { user: user },
      relations: ["hospital", "secondaryDepartment", "doctor"]
    });
  }
}
