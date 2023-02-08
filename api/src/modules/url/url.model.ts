import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsUrl } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Url extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  urlCode: string;

  @IsUrl()
  @Field(() => String)
  @Column()
  longUrl: string;

  @Field(() => String)
  @Column()
  shortUrl: string;
}
