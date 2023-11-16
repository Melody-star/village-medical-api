import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { MedicalInfoService } from './medical-info.service';
import { CreateMedicalInfoDto } from './dto/create-medical-info.dto';
import { UpdateMedicalInfoDto } from './dto/update-medical-info.dto';
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("就诊信息接口")
@Controller('medical-info')
export class MedicalInfoController {
  constructor(private readonly medicalInfoService: MedicalInfoService) {}

  @ApiOperation({ summary: "根据用户ID添加就诊信息" })
  @Post()
  create(@Body() createMedicalInfoDto: CreateMedicalInfoDto) {
    return this.medicalInfoService.create(createMedicalInfoDto);
  }

  @ApiOperation({ summary: "根据用户ID获取用户就诊信息" })
  @Get("getMedicalInfoByUserId/:userId")
  getMedicalInfoByUserId(@Param("userId") userId: string) {
    return this.medicalInfoService.getMedicalInfoByUserId(+userId);
  }

  @ApiOperation({ summary: "获取所有就诊信息" })
  @Get()
  findAll() {
    return this.medicalInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalInfoDto: UpdateMedicalInfoDto) {
    return this.medicalInfoService.update(+id, updateMedicalInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalInfoService.remove(+id);
  }
}
