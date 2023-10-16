import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("用户接口")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @ApiOperation({ summary: "新增用户" })
  @Post()
  async addUser(@Body() createUserDto: CreateUserDto) {
    const isUsernameUnique = await this.userService.isUsernameUnique(createUserDto.account);
    if (!isUsernameUnique) {
      throw new BadRequestException("账号已存在");
    }
    return this.userService.addUser(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   return this.userService.findOne(+id);
  // }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userService.remove(+id);
  }
}
