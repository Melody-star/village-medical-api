import { User } from "../../user/entities/user.entity";

export class CreateMedicationReminderDto {
  userId: string;
  drugName: string;
  reminderTime: string;
  startDate?: string;
  endDate?: string;
  status: string;
  dose:string;
}
