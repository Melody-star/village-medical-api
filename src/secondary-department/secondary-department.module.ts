import { Module } from '@nestjs/common';
import { SecondaryDepartmentService } from './secondary-department.service';
import { SecondaryDepartmentController } from './secondary-department.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { SecondaryDepartment } from "./entities/secondary-department.entity";

@Module({
  imports:[TypeOrmModule.forFeature([SecondaryDepartment])],
  controllers: [SecondaryDepartmentController],
  providers: [SecondaryDepartmentService],
  exports: [SecondaryDepartmentService]
})
export class SecondaryDepartmentModule {}
