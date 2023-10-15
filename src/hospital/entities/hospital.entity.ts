import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "../../tag/entities/tag.entity";

@Entity()
export class Hospital {
  @PrimaryGeneratedColumn()
  hospital_id: number;

  @Column()
  hospital_name: string;

  @Column()
  hospital_level: string;

  @ManyToMany(()=>Tag,tag=>tag.hospitals)
  @JoinTable()
  tags:Tag[];
}
