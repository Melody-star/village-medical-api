import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { HealthRecordService } from "./health-record.service";
import { CreateHealthRecordDto } from "./dto/create-health-record.dto";
import { UpdateHealthRecordDto } from "./dto/update-health-record.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("健康档案")
@Controller("health-record")
export class HealthRecordController {
  constructor(private readonly healthRecordService: HealthRecordService) {
  }

  @ApiOperation({ summary: "添加健康档案" })
  @Post()
  create(@Body() createHealthRecordDto: CreateHealthRecordDto) {
    console.log(createHealthRecordDto);
    return this.healthRecordService.create(createHealthRecordDto);
  }

  @ApiOperation({ summary: "根据用户ID查询健康档案" })
  @Get("getHealthRecordByUserId/:userId")
  getHealthRecordByUserId(@Param("userId") userId: string) {
    return this.healthRecordService.getHealthRecordByUserId(+userId);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.healthRecordService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateHealthRecordDto: UpdateHealthRecordDto) {
    return this.healthRecordService.update(+id, updateHealthRecordDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.healthRecordService.remove(+id);
  }
}
