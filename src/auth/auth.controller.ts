import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Patch,
  Post,
  Query
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login-auth.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Public } from "../public/public.decorator";
import { PermissionService } from "../permission/permission.service";
import axios from "axios";
import { UserService } from "../user/user.service";

@ApiTags("登录")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly permissionService: PermissionService, private readonly userService: UserService) {
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
        userInfo: result
      });
      return { authorization: "Bearer " + newToken, userInfo: result };
    } else {
      throw new HttpException("密码错误", 405);
    }
  }

  @Public()
  @ApiOperation({ summary: "微信一键登录" })
  @Post("wxLogin")
  async wxLogin(@Body() data: { code, userInfo }) {
    try {
      const response = await axios.get("https://api.weixin.qq.com/sns/jscode2session", {
        params: {
          appid: "wxa9960a74471f1524",
          secret: "2e2305791eea7c8933f5b08d08bc45b4",
          js_code: data.code,
          grant_type: "authorization_code"
        }
      });

      const userInfoRes = await this.userService.getUserInfoByOpenId(response.data.openid);

      if (userInfoRes) {
        const newToken = this.jwtService.sign({
          userInfo: userInfoRes
        });
        return { authorization: "Bearer " + newToken, userInfo: userInfoRes };
      } else {
        return this.userService.addUser({
          user_type: 0,
          avatar: data.userInfo.avatarUrl,
          openid: response.data.openid,
          username: data.userInfo.nickName
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  @Public()
  @ApiOperation({ summary: "根据token获取用户信息" })
  @Get("/findUserByToken")
  async findUserByToken(@Query("token") token: string) {
    try {
      const decodeToken = this.jwtService.verify(token.slice(7));
      const userInfo = decodeToken.userInfo;
      const rols = await this.permissionService.getPermissionByUserId(userInfo.user_id);
      let arr = [];
      for (let item of rols) {
        arr.push(item.name);
      }
      return {
        ...userInfo,
        roles: arr
      };
    } catch (e) {
      throw new HttpException("Token过期", 401);
    }
  }

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Public()
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
