import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  permission_id: number;

  @Column()
  name: string;

  @Column()
  describe: string;

  @ManyToMany(() => User, user => user.permissions)
  @JoinTable()
  users: User[];
}
