import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {
  }

  async addUser(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    await this.userRepository.save(user);
    return "添加成功";
  }

  /**
   * 检查用户名是否唯一
   * @param username
   */
  async isUsernameUnique(account: string): Promise<boolean> {
    const existingUser = await this.userRepository.findOne({ where: { account } });
    return !existingUser; // 如果找不到用户，用户名唯一
  }

  async getUserInfo(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }

  findAll() {
    return `This action returns all user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
