import { Module } from '@nestjs/common';
import { MedicationReminderService } from './medication-reminder.service';
import { MedicationReminderController } from './medication-reminder.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MedicationReminder } from "./entities/medication-reminder.entity";

@Module({
  imports:[TypeOrmModule.forFeature([MedicationReminder])],
  controllers: [MedicationReminderController],
  providers: [MedicationReminderService],
})
export class MedicationReminderModule {}
