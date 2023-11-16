import { ApiProperty } from "@nestjs/swagger";

export class CreateAppointmentDto {
  @ApiProperty({ description: "患者ID" })
  userId: string;

  @ApiProperty({ description: "医生ID" })
  doctorId: string;

  @ApiProperty({ description: "预约时间" })
  appointmentTime: string;

  @ApiProperty({ description: "挂号费" })
  registrationFee: number;

  @ApiProperty({ description: "医院ID" })
  hospitalName: string;

  @ApiProperty({ description: "二级科室ID" })
  secondaryDepartment: string;
}
