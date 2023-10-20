import { Injectable } from "@nestjs/common";
import { CreatePermissionDto } from "./dto/create-permission.dto";
import { UpdatePermissionDto } from "./dto/update-permission.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Permission } from "./entities/permission.entity";

@Injectable()
export class PermissionService {

  constructor(
    @InjectRepository(Permission)
    private readonly permission: Repository<Permission>
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
    return `This action returns all permission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permission`;
  }

  update(id: number, updatePermissionDto: UpdatePermissionDto) {
    return `This action updates a #${id} permission`;
  }

  remove(id: number) {
    return `This action removes a #${id} permission`;
  }
}
