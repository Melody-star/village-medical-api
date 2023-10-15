import { Injectable } from '@nestjs/common';
import { CreateMedicationReminderDto } from './dto/create-medication-reminder.dto';
import { UpdateMedicationReminderDto } from './dto/update-medication-reminder.dto';

@Injectable()
export class MedicationReminderService {
  create(createMedicationReminderDto: CreateMedicationReminderDto) {
    return 'This action adds a new medicationReminder';
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

  remove(id: number) {
    return `This action removes a #${id} medicationReminder`;
  }
}
