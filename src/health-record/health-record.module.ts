import { Module } from '@nestjs/common';
import { HealthRecordService } from './health-record.service';
import { HealthRecordController } from './health-record.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { HealthRecord } from "./entities/health-record.entity";
import { UserModule } from "../user/user.module";

@Module({
  imports:[TypeOrmModule.forFeature([HealthRecord]),UserModule],
  controllers: [HealthRecordController],
  providers: [HealthRecordService],
})
export class HealthRecordModule {}
