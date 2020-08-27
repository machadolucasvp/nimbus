import { Entity, Column, PrimaryColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { IsEmail, Length, IsBoolean, MinLength } from 'class-validator';

import { Role } from '../enums'

@Entity()
export class User {

  @PrimaryColumn()
  id!: number;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.GUEST
  })
  role!: Role

  @Column()
  @Length(4, 40)
  name!: string;

  @IsEmail()
  @Length(10, 64)
  email!: string;

  @Column()
  @MinLength(6)
  password!: string;

  @Column()
  @Length(11, 14)
  cpfOrCnpj!: string;

  @Column({ default: true })
  @IsBoolean()
  isActive!: boolean;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

}