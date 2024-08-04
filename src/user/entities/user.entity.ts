import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import * as bcrypt from 'bcryptjs';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    length: 255,
    nullable: true,
    unique: false,
    default: '',
  })
  firstName: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
    unique: false,
    default: '',
  })
  lastName: string;

  @Column('varchar', { length: 255, nullable: false, unique: true })
  username: string;

  @Column('varchar', { length: 255, nullable: false, unique: true })
  email: string;

  @Column('varchar', { nullable: false })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    console.log(salt);
    this.password = await bcrypt.hash(this.password, salt);
  }
}
