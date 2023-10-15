import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Schedule } from "../../schedule/entities/schedule.entity";
import { MedicationReminder } from "../../medication-reminder/entities/medication-reminder.entity";
import { Appointment } from "../../appointment/entities/appointment.entity";
import { MedicalInfo } from "../../medical-info/entities/medical-info.entity";
import { Prescription } from "../../prescription/entities/prescription.entity";
import { ChatSession } from "../../chat-session/entities/chat-session.entity";
import { Message } from "../../message/entities/message.entity";
import { SecondaryDepartment } from "../../secondary-department/entities/secondary-department.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  account: string;

  @Column()
  password: string;

  @Column()
  user_type: number;

  @Column({ nullable: true })
  avatar: string;

  @Column()
  username: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  expertise: string;

  @Column({ nullable: true })
  openid: string;

  @Column({ nullable: true })
  registration_fee: number;

  @OneToOne(() => MedicalInfo)
  @JoinColumn({ name: "medical_info_id" })
  medicalInfo: number;

  @OneToMany(() => Schedule, schedule => schedule.user)
  schedules: Schedule[];

  @OneToOne((() => SecondaryDepartment))
  @JoinColumn({ name: "secondary_department_id" })
  secondaryDepartment: SecondaryDepartment;

  @OneToMany(() => MedicationReminder, medicationReminder => medicationReminder.user)
  medicationReminder: MedicationReminder[];

  @OneToMany(() => Appointment, appointment => appointment.user)
  appointment: Appointment[];

  @OneToMany(() => Prescription, prescription => prescription.user)
  prescription: Prescription[];

  @OneToMany(() => ChatSession, chatSession => chatSession.participant1)
  chatSessions1: ChatSession[];

  @OneToMany(() => ChatSession, chatSession => chatSession.participant2)
  chatSessions2: ChatSession[];

  @OneToMany(() => Message, message => message.sender)
  messages: Message[];
}
