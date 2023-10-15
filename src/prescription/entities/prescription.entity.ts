import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Prescription {
  @PrimaryGeneratedColumn()
  prescription_id: number;

  @ManyToOne(() => User, user => user.prescription, { onDelete: "CASCADE" })
  user: User;

  @Column()
  prescription_link: string;
}
