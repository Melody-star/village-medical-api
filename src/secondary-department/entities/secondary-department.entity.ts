import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PrimaryDepartment } from "../../primary-department/entities/primary-department.entity";

@Entity()
export class SecondaryDepartment {
  @PrimaryGeneratedColumn()
  secondary_department_id: number;

  @ManyToOne(() => PrimaryDepartment, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'primary_department_id' })
  primaryDepartment: PrimaryDepartment;

  @Column()
  department_name: string;

  @Column()
  department_location: string;

  @Column()
  is_recommended: number;
}
