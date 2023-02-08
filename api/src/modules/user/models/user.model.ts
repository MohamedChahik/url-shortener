import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@Entity()
@ObjectType({ isAbstract: true })
@InputType({ isAbstract: true })
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsEmail()
  @Field(() => String)
  @Column({ unique: true })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @Column()
  password: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @Column()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @Column()
  lastName: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  avatar?: string | null;
}
