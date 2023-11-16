import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Appointment } from "./entities/appointment.entity";
import { UserModule } from "../user/user.module";
import { HospitalModule } from "../hospital/hospital.module";
import { SecondaryDepartmentModule } from "../secondary-department/secondary-department.module";
import { MedicalInfoModule } from "../medical-info/medical-info.module";

@Module({
  imports: [TypeOrmModule.forFeature([Appointment]), UserModule, HospitalModule, SecondaryDepartmentModule, MedicalInfoModule],
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class AppointmentModule {}
