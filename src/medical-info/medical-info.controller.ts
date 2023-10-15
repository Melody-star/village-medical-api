import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalInfoService } from './medical-info.service';
import { CreateMedicalInfoDto } from './dto/create-medical-info.dto';
import { UpdateMedicalInfoDto } from './dto/update-medical-info.dto';

@Controller('medical-info')
export class MedicalInfoController {
  constructor(private readonly medicalInfoService: MedicalInfoService) {}

  @Post()
  create(@Body() createMedicalInfoDto: CreateMedicalInfoDto) {
    return this.medicalInfoService.create(createMedicalInfoDto);
  }

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
