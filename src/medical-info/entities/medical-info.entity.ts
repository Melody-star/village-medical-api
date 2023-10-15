import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
