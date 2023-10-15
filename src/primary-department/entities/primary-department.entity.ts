import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Hospital } from "../../hospital/entities/hospital.entity";
import { SecondaryDepartment } from "../../secondary-department/entities/secondary-department.entity";

@Entity()
export class PrimaryDepartment {
  @PrimaryGeneratedColumn()
  primary_department_id: number;

  @ManyToOne(() => Hospital, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'hospital_id' })
  hospital: Hospital;

  @Column()
  department_name: string;

  @OneToMany(() => SecondaryDepartment, secondaryDepartment => secondaryDepartment.primaryDepartment)
  secondaryDepartments: SecondaryDepartment[];
}
