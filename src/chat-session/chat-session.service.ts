import { Injectable } from '@nestjs/common';
import { CreateChatSessionDto } from './dto/create-chat-session.dto';
import { UpdateChatSessionDto } from './dto/update-chat-session.dto';

@Injectable()
export class ChatSessionService {
  create(createChatSessionDto: CreateChatSessionDto) {
    return 'This action adds a new chatSession';
  }

  findAll() {
    return `This action returns all chatSession`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chatSession`;
  }

  update(id: number, updateChatSessionDto: UpdateChatSessionDto) {
    return `This action updates a #${id} chatSession`;
  }

  remove(id: number) {
    return `This action removes a #${id} chatSession`;
  }
}
