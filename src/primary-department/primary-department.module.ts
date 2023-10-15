import { Module } from '@nestjs/common';
import { PrimaryDepartmentService } from './primary-department.service';
import { PrimaryDepartmentController } from './primary-department.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PrimaryDepartment } from "./entities/primary-department.entity";

@Module({
  imports:[TypeOrmModule.forFeature([PrimaryDepartment])],
  controllers: [PrimaryDepartmentController],
  providers: [PrimaryDepartmentService],
})
export class PrimaryDepartmentModule {}
