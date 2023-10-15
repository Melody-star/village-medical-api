import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Message } from "../../message/entities/message.entity";

@Entity()
export class Media {
  @PrimaryGeneratedColumn()
  media_id: number;

  @Column()
  media_type: string;

  @Column()
  media_url: string;

  @ManyToOne(() => Message, message => message.media)
  message: Message;
}
