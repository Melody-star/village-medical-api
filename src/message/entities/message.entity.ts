import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { ChatSession } from "../../chat-session/entities/chat-session.entity";
import { Media } from "../../media/entities/media.entity";

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  message_id: number;

  @Column()
  message_text: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;

  @ManyToOne(() => ChatSession, chatSession => chatSession.messages)
  session: ChatSession;

  @ManyToOne(() => User, user => user.messages)
  sender: User;

  @OneToMany(() => Media, media => media.message)
  media: Media[]; // 这里建立了一对多关系
}
