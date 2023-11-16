import { Module } from '@nestjs/common';
import { MedicalInfoService } from './medical-info.service';
import { MedicalInfoController } from './medical-info.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MedicalInfo } from "./entities/medical-info.entity";
import { UserModule } from "../user/user.module";

@Module({
  imports: [TypeOrmModule.forFeature([MedicalInfo]), UserModule],
  controllers: [MedicalInfoController],
  providers: [MedicalInfoService],
  exports: [MedicalInfoService]
})
export class MedicalInfoModule {}
