import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class HelpCenter {
  @PrimaryGeneratedColumn()
  help_id: number;

  @Column()
  title: string;

  @Column()
  content: string;
}
