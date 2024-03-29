import { Injectable } from "@nestjs/common";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";
import { UserService } from "../user/user.service";
import { User } from "../user/entities/user.entity";
import { LoginDto } from "./dto/login-auth.dto";

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService
  ) {
  }

  async login(loginDto: LoginDto) {
    console.log(loginDto);

    const userInfo: User = await this.userService.getUserInfo(loginDto.account);

    if (userInfo?.password == loginDto?.password) {
      return userInfo;
    } else {
      return false;
    }
  }

  create(createAuthDto: CreateAuthDto) {
    return "This action adds a new auth";
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
