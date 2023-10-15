import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HelpCenterService } from './help-center.service';
import { CreateHelpCenterDto } from './dto/create-help-center.dto';
import { UpdateHelpCenterDto } from './dto/update-help-center.dto';

@Controller('help-center')
export class HelpCenterController {
  constructor(private readonly helpCenterService: HelpCenterService) {}

  @Post()
  create(@Body() createHelpCenterDto: CreateHelpCenterDto) {
    return this.helpCenterService.create(createHelpCenterDto);
  }

  @Get()
  findAll() {
    return this.helpCenterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.helpCenterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHelpCenterDto: UpdateHelpCenterDto) {
    return this.helpCenterService.update(+id, updateHelpCenterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.helpCenterService.remove(+id);
  }
}
