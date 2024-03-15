import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity()
export class HealthRecord {
  @PrimaryGeneratedColumn()
  id: number;

  // 过往病史
  @Column()
  pastMedicalHistory: string;

  // 家庭病史
  @Column()
  familyMedicalHistory: string;

  // 过敏史
  @Column()
  allergyHistory: string;

  // 肝功能
  @Column()
  liverFunction: string;

  // 肾功能
  @Column()
  kidneyFunction: string;

  // 特殊人群
  @Column()
  specialPopulation: string;

  // 身高（单位：厘米）
  @Column({ nullable: true })
  height: number;

  // 体重（单位：千克）
  @Column({ nullable: true })
  weight: number;

  // 血压收缩压
  @Column({ nullable: true })
  systolicBloodPressure: number;

  // 血压舒张压
  @Column({ nullable: true })
  diastolicBloodPressure: number;

  // 心率
  @Column({ nullable: true })
  heartRate: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
