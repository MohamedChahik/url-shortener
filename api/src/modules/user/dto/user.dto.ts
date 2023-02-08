import {
  Field,
  InputType,
  ObjectType,
  OmitType,
  PickType,
} from '@nestjs/graphql';
import { User } from '../models/user.model';

@InputType()
export class BaseUserInput extends User {}
@InputType()
export class LoginUserInput extends PickType(BaseUserInput, [
  'email',
  'password',
]) {}

@InputType()
export class RegisterUserInput extends OmitType(BaseUserInput, ['id']) {}

@ObjectType()
export class BaseUserOut extends User {}

@ObjectType()
export class UserOutput {
  @Field(() => String)
  accessToken: string;

  @Field(() => BaseUserOut)
  user: BaseUserOut;
}
