import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Hospital } from "../../hospital/entities/hospital.entity";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  tag_id: number;

  @Column()
  name: string;

  @Column()
  image_url: string;

  @ManyToMany(() => Hospital, hospital => hospital.tags)
  hospitals: Hospital[];
}
