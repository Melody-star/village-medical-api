import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrimaryDepartmentService } from './primary-department.service';
import { CreatePrimaryDepartmentDto } from './dto/create-primary-department.dto';
import { UpdatePrimaryDepartmentDto } from './dto/update-primary-department.dto';

@Controller('primary-department')
export class PrimaryDepartmentController {
  constructor(private readonly primaryDepartmentService: PrimaryDepartmentService) {}

  @Post()
  create(@Body() createPrimaryDepartmentDto: CreatePrimaryDepartmentDto) {
    return this.primaryDepartmentService.create(createPrimaryDepartmentDto);
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
