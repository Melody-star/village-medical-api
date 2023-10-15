import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class News {
  @PrimaryGeneratedColumn()
  news_id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  publish_date: Date;

  @Column()
  content: string;

  @Column()
  type: number;

  @Column()
  video_link: string;

  @Column()
  category: string;
}
