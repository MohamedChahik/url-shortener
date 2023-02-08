import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import {
  LoginUserInput,
  RegisterUserInput,
  UserOutput,
} from 'src/modules/user/dto/user.dto';
import { AuthService } from '../auth.service';

@Resolver(UserOutput)
export class AuthMutationsResolver {
  constructor(private readonly authService: AuthService) {}

  /**
  @UseGuards(LocalAuthGuard)
  @Mutation(() => AuthLoginOutput)
  async authLogin(
    @Context('req') req,
    @Args('username') _username: string,
    @Args('password') _password: string,
  ) {
    return this.authService.login(req.user);
  }
**/

  @Mutation(() => UserOutput)
  authRegister(@Args('input') input: RegisterUserInput) {
    return this.authService.register(input);
  }

  @Mutation(() => UserOutput)
  async authLogin(@Args('input') input: LoginUserInput) {
    return this.authService.login(input);
  }
}
