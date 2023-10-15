import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  appointment_id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'doctor_id' })
  doctor: User;

  @Column()
  appointment_time: Date;

  @Column()
  registration_fee: number;

  @Column()
  medical_code: string;

  @Column()
  medical_order_number: string;
}
