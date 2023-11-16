import { ApiProperty } from "@nestjs/swagger";

export class GetUserBySecondaryDepartmentAndDateDto {
  @ApiProperty({ description: "二级科室ID" })
  secondary_department_id: number;

  @ApiProperty({ description: "日期" })
  date: Date;
}

export class UserResponse {
  user_id: number;
  account: string;
  // Add other user properties as needed
}

