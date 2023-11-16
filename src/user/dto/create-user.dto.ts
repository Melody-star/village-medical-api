import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ description: "账号", required: false })
  account?: string;

  @ApiProperty({ description: "密码", required: false })
  password?: string;

  @ApiProperty({ description: "用户类型（0患者/1医师/2医院管理员/3超级管理员）" })
  user_type: number;

  @ApiProperty({ description: "头像", required: false })
  avatar?: string;

  @ApiProperty({ description: "用户名" })
  username: string;

  @ApiProperty({ description: "职称", required: false })
  title?: string;

  @ApiProperty({ description: "擅长", required: false })
  expertise?: string;

  @ApiProperty({ description: "openid", required: false })
  openid?: string;

  @ApiProperty({ description: "挂号费", required: false })
  registration_fee?: number;

  @ApiProperty({ description: "就诊信息ID", required: false })
  medical_info_id?: number;

  @ApiProperty({ description: "二级科室ID", required: false })
  secondary_department_id?: number;
}
