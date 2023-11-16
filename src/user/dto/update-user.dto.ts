import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ description: "账号" })
  account: string;

  @ApiProperty({ description: "密码" })
  password: string;

  @ApiProperty({ description: "用户类型（0患者/1医师/2医院管理员/3超级管理员）" })
  user_type: number;

  @ApiProperty({ description: "头像" })
  avatar: string;

  @ApiProperty({ description: "用户名" })
  username: string;

  @ApiProperty({ description: "职称" })
  title: string;

  @ApiProperty({ description: "擅长" })
  expertise: string;

  @ApiProperty({ description: "openid" })
  openid: string;

  @ApiProperty({ description: "挂号费" })
  registration_fee: number;

  @ApiProperty({ description: "就诊信息ID" })
  medical_info_id: number;

  @ApiProperty({ description: "二级科室ID" })
  secondary_department_id: number;
}
