import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePermissionDto } from "./dto/create-permission.dto";
import { UpdatePermissionDto } from "./dto/update-permission.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Permission } from "./entities/permission.entity";
import { User } from "../user/entities/user.entity";

@Injectable()
export class PermissionService {

  constructor(
    @InjectRepository(Permission)
    private readonly permission: Repository<Permission>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {
  }

  getPermissionByUserId(userId: number) {
    return this.permission.createQueryBuilder("permission").innerJoin("permission.users", "user")
      .where("user.user_id= :userId", { userId }).getMany();
  }

  create(createPermissionDto: CreatePermissionDto) {
    return "This action adds a new permission";
  }

  findAll() {
    return this.permission.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} permission`;
  }

  async update(id: number, list: Array<string>) {
    const user = await this.userRepository.findOne({ where: { user_id: id }, relations: ["permissions"] });
    if (!user) {
      throw new NotFoundException("用户未找到");
    }
    const permissions = await this.permission.find({ where: { name: In(list) } });
    user.permissions = permissions;
    await this.userRepository.save(user);
    return "修改成功";
  }

  remove(id: number) {
    return `This action removes a #${id} permission`;
  }
}
