import { Module } from '@nestjs/common';
import { HelpCenterService } from './help-center.service';
import { HelpCenterController } from './help-center.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { HelpCenter } from "./entities/help-center.entity";

@Module({
  imports:[TypeOrmModule.forFeature([HelpCenter])],
  controllers: [HelpCenterController],
  providers: [HelpCenterService],
})
export class HelpCenterModule {}
