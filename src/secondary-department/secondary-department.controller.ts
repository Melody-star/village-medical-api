import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SecondaryDepartmentService } from './secondary-department.service';
import { CreateSecondaryDepartmentDto } from './dto/create-secondary-department.dto';
import { UpdateSecondaryDepartmentDto } from './dto/update-secondary-department.dto';

@Controller('secondary-department')
export class SecondaryDepartmentController {
  constructor(private readonly secondaryDepartmentService: SecondaryDepartmentService) {}

  @Post()
  create(@Body() createSecondaryDepartmentDto: CreateSecondaryDepartmentDto) {
    return this.secondaryDepartmentService.create(createSecondaryDepartmentDto);
  }

  @Get()
  findAll() {
    return this.secondaryDepartmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.secondaryDepartmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSecondaryDepartmentDto: UpdateSecondaryDepartmentDto) {
    return this.secondaryDepartmentService.update(+id, updateSecondaryDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.secondaryDepartmentService.remove(+id);
  }
}
