import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicationReminderService } from './medication-reminder.service';
import { CreateMedicationReminderDto } from './dto/create-medication-reminder.dto';
import { UpdateMedicationReminderDto } from './dto/update-medication-reminder.dto';

@Controller('medication-reminder')
export class MedicationReminderController {
  constructor(private readonly medicationReminderService: MedicationReminderService) {}

  @Post()
  create(@Body() createMedicationReminderDto: CreateMedicationReminderDto) {
    return this.medicationReminderService.create(createMedicationReminderDto);
  }

  @Get()
  findAll() {
    return this.medicationReminderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicationReminderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicationReminderDto: UpdateMedicationReminderDto) {
    return this.medicationReminderService.update(+id, updateMedicationReminderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicationReminderService.remove(+id);
  }
}
