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
  publish_date: string;

  @Column()
  content: string;

  @Column()
  type: number;

  @Column({ nullable: true })
  video_link: string;

  @Column({ nullable: true })
  images: string;

  @Column()
  category: string;
}
