import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PermissionService } from "../permission/permission.service";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly permissionService: PermissionService
  ) {
  }

  async addUser(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    await this.userRepository.save(user);
    return user;
  }

  // 根据openid查询用户信息
  getUserInfoByOpenId(openId: string) {
    return this.userRepository.findOne({ where: { openid: openId } });
  }

  /**
   * 检查用户名是否唯一
   * @param username
   */
  async isUsernameUnique(account: string): Promise<boolean> {
    const existingUser = await this.userRepository.findOne({ where: { account } });
    return !existingUser; // 如果找不到用户，用户名唯一
  }

  async findOne(id: number) {
    const userInfo = await this.userRepository.findOne({ where: { user_id: id } });
    if (userInfo == null) {
      return "用户不存在";
    } else {
      const roles = await this.permissionService.getPermissionByUserId(userInfo.user_id);
      return {
        ...userInfo,
        roles
      };
    }
  }

  getUserInfo(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }

  getUserInfoById(id: number) {
    return this.userRepository.findOne({ where: { user_id: id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // 查找要更新的用户
    const user = await this.userRepository.findOne({ where: { user_id: id } });

    if (!user) {
      return null; // 或者抛出异常，取决于您的需求
    }

    // 更新用户信息
    this.userRepository.merge(user, updateUserDto);

    // 保存更新后的用户信息
    return await this.userRepository.save(user);
  }

  async remove(id: number) {
    return await this.userRepository.delete({ user_id: id });
  }

  async getUserInfoByType(type: number) {
    if (type == 4) {
      return await this.userRepository.createQueryBuilder("user").where("user.user_type IN (:...types)", { types: [0, 2] }).getMany();
    } else {
      return await this.userRepository.find({ where: { user_type: type } });
    }
  }

  async getUsersBySecondaryDepartmentAndDate(
    secondaryDepartmentId: number,
    date: Date
  ): Promise<User[]> {
    // 在此处编写查询用户信息的逻辑，根据 secondary_department_id 和 date 进行筛选
    // 假设您使用 TypeORM 来进行数据库查询
    const users = await this.userRepository
      .createQueryBuilder("user")
      .innerJoin("user.secondaryDepartment", "secondaryDepartment")
      .where("secondaryDepartment.secondary_department_id = :secondaryDepartmentId", { secondaryDepartmentId })
      .innerJoin("user.schedules", "schedule")
      .where("schedule.date = :date", { date })
      .getMany();

    return users;
  }

  async setOpenIdByUserId(query: any) {
    const user = await this.userRepository.findOne({ where: { user_id: query.userId } });
    user.openid = query.openid;
    return await this.userRepository.save(user);
  }
}
