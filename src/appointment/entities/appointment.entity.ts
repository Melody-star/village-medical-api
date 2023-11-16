import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { Hospital } from "../../hospital/entities/hospital.entity";
import { SecondaryDepartment } from "../../secondary-department/entities/secondary-department.entity";

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  appointment_id: number;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "doctor_id" })
  doctor: User;

  @ManyToOne(() => Hospital)
  @JoinColumn()
  hospital: Hospital;

  @ManyToOne(() => SecondaryDepartment)
  @JoinColumn()
  secondaryDepartment: SecondaryDepartment;

  @Column()
  appointment_time: string;

  @Column()
  registration_fee: number;

  @Column()
  medical_code: string;

  @Column()
  medical_order_number: string;
}
