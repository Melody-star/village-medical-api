import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity()
export class MedicalInfo {
  @PrimaryGeneratedColumn()
  medical_info_id: number;

  @Column()
  medical_card_number: string;

  @Column()
  id_card: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
