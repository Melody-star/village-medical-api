import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, Patch, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login-auth.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Public } from "../public/public.decorator";

@ApiTags("登录")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Inject()
  jwtService: JwtService;

  @Public()
  @ApiOperation({ summary: "登录" })
  @Post("login")
  async login(@Body() loginDto: LoginDto) {
    const result = await this.authService.login(loginDto);
    if (result) {
      const newToken = this.jwtService.sign({
        count: 1
      });

      return { authorization: "Bearer " + newToken };
    } else {
      // return { message: "登录失败" };
      throw new HttpException("密码错误", HttpStatus.UNAUTHORIZED);
    }
  }

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.authService.remove(+id);
  }
}
