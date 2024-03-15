import { Module } from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { PrescriptionController } from './prescription.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Prescription } from "./entities/prescription.entity";
import { UserModule } from "../user/user.module";

@Module({
  imports:[TypeOrmModule.forFeature([Prescription]),UserModule],
  controllers: [PrescriptionController],
  providers: [PrescriptionService],
})
export class PrescriptionModule {}
