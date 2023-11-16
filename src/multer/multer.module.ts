import { Module } from "@nestjs/common";
import { MulterService } from "./multer.service";
import { MulterController } from "./multer.controller";
import { UserService } from "../user/user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../user/entities/user.entity";
import { UserModule } from "../user/user.module";

@Module({
  controllers: [MulterController],
  providers: [MulterService],
  imports: [UserModule]
})
export class MulterModule {
}
