import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { UserService } from "../user/user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../user/entities/user.entity";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./auth.guard";

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, {
    provide: APP_GUARD,
    useClass: AuthGuard
  }],
  imports: [JwtModule.register({
    secret: "xcyl",
    signOptions: {
      expiresIn: "7d"
    }
  }), TypeOrmModule.forFeature([User])]
})
export class AuthModule {
}
