import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserInput, RegisterUserInput } from '../user/dto/user.dto';
import { User } from '../user/models/user.model';
import { UserService } from '../user/user.service';
import { PasswordService } from './password.service';

export interface JWTPayload {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly passwordService: PasswordService,
  ) {}

  async login(filter: LoginUserInput) {
    const user = await this.userService.getUser({ email: filter.email });
    if (!user) {
      throw new NotFoundException(`No user found`);
    }

    const isValidUser = await this.passwordService.validatePassword(
      filter.password,
      user.password,
    );
    if (!isValidUser) {
      throw new NotFoundException(`No user found`);
    }

    return {
      ...this.generateToken(user.id),
      user,
    };
  }

  async register(input: RegisterUserInput) {
    const password = await this.passwordService.hashPassword(input.password);
    const user = await this.userService.createUser({ ...input, password });
    return {
      ...this.generateToken(user.id),
      user,
    };
  }

  async validateUser(filter: Partial<User>) {
    return this.userService.getUser(filter);
  }

  private generateToken(id: string) {
    return {
      accessToken: this.jwtService.sign({
        id,
      }),
    };
  }
}
