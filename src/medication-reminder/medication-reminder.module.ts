import { Module } from "@nestjs/common";
import { MedicationReminderService } from "./medication-reminder.service";
import { MedicationReminderController } from "./medication-reminder.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MedicationReminder } from "./entities/medication-reminder.entity";
import { UserModule } from "../user/user.module";
import { ScheduleModule } from "@nestjs/schedule";
import { AppointmentModule } from "../appointment/appointment.module";

@Module({
  imports: [TypeOrmModule.forFeature([MedicationReminder]), UserModule, ScheduleModule.forRoot(),AppointmentModule],
  controllers: [MedicationReminderController],
  providers: [MedicationReminderService]
})
export class MedicationReminderModule {
}
