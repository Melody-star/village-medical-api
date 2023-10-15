import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Message } from "../../message/entities/message.entity";
import { User } from "../../user/entities/user.entity";

@Entity()
export class ChatSession {
  @PrimaryGeneratedColumn()
  session_id: number;

  @ManyToOne(() => User, user => user.chatSessions1)
  participant1: User;

  @ManyToOne(() => User, user => user.chatSessions2)
  participant2: User;

  @OneToMany(() => Message, message => message.session)
  messages: Message[];
}
