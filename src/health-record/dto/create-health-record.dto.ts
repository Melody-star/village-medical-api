import { Column, JoinColumn, OneToOne } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { ApiOperation, ApiProperty } from "@nestjs/swagger";

export class CreateHealthRecordDto {
  // 过往病史
  pastMedicalHistory: string;

  // 家庭病史
  familyMedicalHistory: string;

  // 过敏史
  allergyHistory: string;

  // 肝功能
  liverFunction: string;

  // 肾功能
  kidneyFunction: string;

  // 特殊人群
  specialPopulation: string;

  // 身高（单位：厘米）
  @ApiProperty({ required: false })
  height: number;

  // 体重（单位：千克）
  @ApiProperty({ required: false })
  weight: number;

  // 血压收缩压
  @ApiProperty({ required: false })
  systolicBloodPressure: number;

  // 血压舒张压
  @ApiProperty({ required: false })
  diastolicBloodPressure: number;

  // 心率
  @ApiProperty({ required: false })
  heartRate: number;

  userId: string;

  user: User;
}
