import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from './user/user.module';
import { ScheduleModule } from './schedule/schedule.module';
import { HospitalModule } from './hospital/hospital.module';
import { TagModule } from './tag/tag.module';
import { PrimaryDepartmentModule } from './primary-department/primary-department.module';
import { SecondaryDepartmentModule } from './secondary-department/secondary-department.module';
import { MedicationReminderModule } from './medication-reminder/medication-reminder.module';
import { AppointmentModule } from './appointment/appointment.module';
import { MedicalInfoModule } from './medical-info/medical-info.module';
import { PrescriptionModule } from './prescription/prescription.module';
import { NewsModule } from './news/news.module';
import { HelpCenterModule } from './help-center/help-center.module';
import { MessageModule } from './message/message.module';
import { ChatSessionModule } from './chat-session/chat-session.module';
import { MediaModule } from './media/media.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql", //数据库类型
    username: "root", //账号
    password: "123456", //密码
    host: "localhost", //host
    port: 3306, //
    database: "medicaldb", //库名
    synchronize: true, //synchronize字段代表是否自动将实体类同步到数据库
    retryDelay: 500, //重试连接数据库间隔
    retryAttempts: 10,//重试连接数据库的次数
    autoLoadEntities: true //如果为true,将自动加载实体 forFeature()方法注册的每个实体都将自动添加到配置对象的实体数组中
  }), UserModule, ScheduleModule, HospitalModule, TagModule, PrimaryDepartmentModule, SecondaryDepartmentModule, MedicationReminderModule, AppointmentModule, MedicalInfoModule, PrescriptionModule, NewsModule, HelpCenterModule, MessageModule, ChatSessionModule, MediaModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
