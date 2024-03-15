import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { MedicationReminderService } from "./medication-reminder.service";
import { CreateMedicationReminderDto } from "./dto/create-medication-reminder.dto";
import { UpdateMedicationReminderDto } from "./dto/update-medication-reminder.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("服药提醒")
@Controller("medication-reminder")
export class MedicationReminderController {
  constructor(private readonly medicationReminderService: MedicationReminderService) {
  }

  @ApiOperation({ summary: "添加服药提醒" })
  @Post()
  create(@Body() createMedicationReminderDto: CreateMedicationReminderDto) {
    return this.medicationReminderService.create(createMedicationReminderDto);
  }

  @ApiOperation({ summary: "根据用户Id获取所有服药提醒" })
  @Get("getMedicationReminderByUserId/:userId")
  getMedicationReminderByUserId(@Param("userId") userId: string) {
    return this.medicationReminderService.getMedicationReminderByUserId(+userId);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.medicationReminderService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateMedicationReminderDto: UpdateMedicationReminderDto) {
    return this.medicationReminderService.update(+id, updateMedicationReminderDto);
  }

  @ApiOperation({ summary: "根据ID删除服药提醒" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.medicationReminderService.remove(+id);
  }
}
