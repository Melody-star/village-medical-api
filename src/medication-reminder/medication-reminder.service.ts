import { Injectable } from "@nestjs/common";
import { CreateMedicationReminderDto } from "./dto/create-medication-reminder.dto";
import { UpdateMedicationReminderDto } from "./dto/update-medication-reminder.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { MedicationReminder } from "./entities/medication-reminder.entity";
import { Repository } from "typeorm";
import { UserService } from "../user/user.service";
import * as cron from "node-cron";
import { AppointmentService } from "../appointment/appointment.service";

@Injectable()
export class MedicationReminderService {

  constructor(
    @InjectRepository(MedicationReminder)
    private readonly medicationReminder: Repository<MedicationReminder>,
    private readonly userService: UserService,
    private readonly appointmentService: AppointmentService
  ) {
  }

  async create(createMedicationReminderDto: CreateMedicationReminderDto) {
    const userInfo = await this.userService.getUserInfoById(+createMedicationReminderDto.userId);
    let medicationReminder = new MedicationReminder();
    medicationReminder.user = userInfo;
    medicationReminder.drug_name = createMedicationReminderDto.drugName;
    medicationReminder.reminder_time = createMedicationReminderDto.reminderTime;
    medicationReminder.status = createMedicationReminderDto.status;
    medicationReminder.dose = createMedicationReminderDto.dose;
    const res = await this.medicationReminder.save(medicationReminder);

    const cronExpression = this.convertTimeToCronExpression(res.reminder_time);
    cron.schedule(cronExpression, () => {
      let data = {
        "thing1": {
          "value": medicationReminder.drug_name
        },
        "time2": {
          "value": medicationReminder.reminder_time
        },
        "thing3": {
          "value": medicationReminder.dose
        },
        "thing4": {
          "value": "请及时服药"
        }
      };
      this.appointmentService.sendSubscribe(userInfo.openid, data, "GPeHLiXQrUMiY9EpZReIMtuFttGyMF5PClEPG-uC9ws");
    });
    return res;
  }

  getAllReminder() {
    return this.medicationReminder.find();
  }

  convertTimeToCronExpression(time: string): string {
    const [hours, minutes] = time.split(":");

    // Validate the input
    const numericHours = parseInt(hours, 10);
    const numericMinutes = parseInt(minutes, 10);

    if (isNaN(numericHours) || isNaN(numericMinutes) || numericHours < 0 || numericHours > 23 || numericMinutes < 0 || numericMinutes > 59) {
      throw new Error("Invalid time format");
    }

    // Convert to Cron expression format
    const cronExpression = `${numericMinutes} ${numericHours} * * *`;
    return cronExpression;
  }

  findAll() {
    return `This action returns all medicationReminder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicationReminder`;
  }

  update(id: number, updateMedicationReminderDto: UpdateMedicationReminderDto) {
    return `This action updates a #${id} medicationReminder`;
  }

  async remove(id: number) {
    const res = await this.medicationReminder.delete({ reminder_id: id });
    return "删除成功";
  }

  async getMedicationReminderByUserId(userId: number) {
    const userInfo = await this.userService.getUserInfoById(userId);
    return this.medicationReminder.find({ where: { user: userInfo } });
  }
}
