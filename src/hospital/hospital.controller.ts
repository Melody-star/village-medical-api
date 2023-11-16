import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { HospitalService } from "./hospital.service";
import { CreateHospitalDto } from "./dto/create-hospital.dto";
import { UpdateHospitalDto } from "./dto/update-hospital.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Public } from "../public/public.decorator";

@ApiTags("医院接口")
@Controller("hospital")
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {
  }

  @Post()
  create(@Body() createHospitalDto: CreateHospitalDto) {
    return this.hospitalService.create(createHospitalDto);
  }

  @ApiOperation({ summary: "获取所有医院信息" })
  @Get()
  findAll() {
    return this.hospitalService.findAll();
  }

  @Public()
  @ApiOperation({ summary: "根据城市获取医院信息" })
  @Get("getHospitalByCity/:city")
  getHospitalByCity(@Param("city") city: string) {
    return this.hospitalService.getHospitalByCity(city);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.hospitalService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateHospitalDto: UpdateHospitalDto) {
    return this.hospitalService.update(+id, updateHospitalDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.hospitalService.remove(+id);
  }
}
