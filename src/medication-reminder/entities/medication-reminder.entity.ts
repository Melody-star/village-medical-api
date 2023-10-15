import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity()
export class MedicationReminder {
  @PrimaryGeneratedColumn()
  reminder_id: number;

  @ManyToOne(() => User, user => user.medicationReminder, { onDelete: "CASCADE" })
  user: User;

  @Column()
  drug_name: string;

  @Column()
  reminder_time: Date;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  status: number;
}
