import { Module } from '@nestjs/common';
import { ChatSessionService } from './chat-session.service';
import { ChatSessionController } from './chat-session.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChatSession } from "./entities/chat-session.entity";

@Module({
  imports:[TypeOrmModule.forFeature([ChatSession])],
  controllers: [ChatSessionController],
  providers: [ChatSessionService],
})
export class ChatSessionModule {}
