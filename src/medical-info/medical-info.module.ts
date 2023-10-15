import { Module } from '@nestjs/common';
import { MedicalInfoService } from './medical-info.service';
import { MedicalInfoController } from './medical-info.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MedicalInfo } from "./entities/medical-info.entity";

@Module({
  imports:[TypeOrmModule.forFeature([MedicalInfo])],
  controllers: [MedicalInfoController],
  providers: [MedicalInfoService],
})
export class MedicalInfoModule {}
