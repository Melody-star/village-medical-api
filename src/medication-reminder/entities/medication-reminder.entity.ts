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
  dose:string;

  @Column()
  reminder_time: string;

  @Column({ nullable: true })
  start_date: string;

  @Column({ nullable: true })
  end_date: string;

  @Column()
  status: string;
}
