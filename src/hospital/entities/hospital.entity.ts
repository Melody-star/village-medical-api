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

  @Column()
  hospital_city: string;

  @Column()
  hospital_image: string;

  @Column()
  hospital_address: string;

  @ManyToMany(()=>Tag,tag=>tag.hospitals)
  @JoinTable()
  tags:Tag[];
}
