import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicationReminderDto } from './create-medication-reminder.dto';

export class UpdateMedicationReminderDto extends PartialType(CreateMedicationReminderDto) {}
