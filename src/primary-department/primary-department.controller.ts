import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrimaryDepartmentService } from './primary-department.service';
import { CreatePrimaryDepartmentDto } from './dto/create-primary-department.dto';
import { UpdatePrimaryDepartmentDto } from './dto/update-primary-department.dto';
import { ApiOperation } from "@nestjs/swagger";

@Controller('primary-department')
export class PrimaryDepartmentController {
  constructor(private readonly primaryDepartmentService: PrimaryDepartmentService) {}

  @Post()
  create(@Body() createPrimaryDepartmentDto: CreatePrimaryDepartmentDto) {
    return this.primaryDepartmentService.create(createPrimaryDepartmentDto);
  }

  @ApiOperation({ summary: "根据医院ID获取科室信息" })
  @Get("getDepartmentById/:id")
  getDepartmentById(@Param("id") id: string) {
    return this.primaryDepartmentService.getDepartmentById(+id);
  }

  @Get()
  findAll() {
    return this.primaryDepartmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.primaryDepartmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrimaryDepartmentDto: UpdatePrimaryDepartmentDto) {
    return this.primaryDepartmentService.update(+id, updatePrimaryDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.primaryDepartmentService.remove(+id);
  }
}
