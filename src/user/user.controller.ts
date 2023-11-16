import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Public } from "../public/public.decorator";
import {
  GetUserBySecondaryDepartmentAndDateDto,
  UserResponse
} from "./dto/get-user-by-secondary-department-and-date.dto";
import { SchemaLogCommand } from "typeorm/commands/SchemaLogCommand";

@ApiTags("用户接口")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Public()
  @ApiOperation({ summary: "新增用户" })
  @Post()
  async addUser(@Body() createUserDto: CreateUserDto) {
    const isUsernameUnique = await this.userService.isUsernameUnique(createUserDto.account);
    if (!isUsernameUnique) {
      throw new BadRequestException("账号已存在");
    }
    return this.userService.addUser(createUserDto);
  }

  @ApiOperation({ summary: "根据用户ID设置openId" })
  @Get("setOpenIdByUserId")
  setOpenIdByUserId(@Query() query: any) {
    return this.userService.setOpenIdByUserId(query);
  }

  @Public()
  @ApiOperation({ summary: "根据用户类型获取用户信息" })
  @Get("getUserInfoByType")
  getUserInfoByType(@Query("type") type: string) {
    return this.userService.getUserInfoByType(+type);
  }

  @Public()
  @ApiOperation({ summary: "根据用户ID获取用户信息" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userService.findOne(+id);
  }

  @ApiOperation({ summary: "根据二级科室ID和日期获取当日值班医生" })
  @Post("getDoctorBySecondaryDepartmentIdAndDay")
  async getUsersBySecondaryDepartmentAndDate(
    @Body() query: GetUserBySecondaryDepartmentAndDateDto
  ) {
    // 根据 secondary_department_id 和 date 查询用户信息
    return await this.userService.getUsersBySecondaryDepartmentAndDate(
      query.secondary_department_id,
      query.date
    );
  }

  @Public()
  @ApiOperation({ summary: "根据用户ID更新用户信息" })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    const updatedUser = this.userService.update(+id, updateUserDto);
    if (!updatedUser) {
      // 如果用户不存在，抛出 404 错误
      throw new NotFoundException("User not found");
    }
    return updatedUser;
  }

  @Public()
  @ApiOperation({ summary: "根据用户ID删除用户" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userService.remove(+id);
  }
}
