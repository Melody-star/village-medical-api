import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { AppointmentService } from "./appointment.service";
import { CreateAppointmentDto } from "./dto/create-appointment.dto";
import { UpdateAppointmentDto } from "./dto/update-appointment.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Public } from "../public/public.decorator";

@ApiTags("预约挂号接口")
@Controller("appointment")
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {
  }

  @ApiOperation({ summary: "新增挂号信息" })
  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentService.create(createAppointmentDto);
  }

  @ApiOperation({ summary: "根据用户ID查询挂号信息" })
  @Get("getAppointmentByUserId")
  getAppointmentByUserId(@Query("id") id: string) {
    return this.appointmentService.getAppointmentByUserId(id);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.appointmentService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentService.update(+id, updateAppointmentDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.appointmentService.remove(+id);
  }
}
