import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { PermissionService } from "./permission.service";
import { CreatePermissionDto } from "./dto/create-permission.dto";
import { UpdatePermissionDto } from "./dto/update-permission.dto";
import { ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { Public } from "../public/public.decorator";

@ApiTags("权限")
@Controller("permission")
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {
  }

  @Post()
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionService.create(createPermissionDto);
  }

  @Public()
  @ApiOperation({ summary: "根据用户ID查询权限" })
  @ApiParam({ name: "userId", required: true })
  @Get("getPermissionByUserId")
  getPermissionByUserId(@Query("userId") userId: number) {
    return this.permissionService.getPermissionByUserId(userId);
  }

  @ApiOperation({ summary: "获取所有权限列表" })
  @Get()
  findAll() {
    return this.permissionService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.permissionService.findOne(+id);
  }

  @ApiOperation({ summary: "根据用户ID修改用户权限" })
  @Patch(":id")
  update(@Param("id") id: string, @Body("list") list: Array<string>) {
    console.log(id, list);
    return this.permissionService.update(+id, list);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.permissionService.remove(+id);
  }
}
