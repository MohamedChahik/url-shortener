import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from 'src/modules/user/models/user.model';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate({ id }: Partial<User>): Promise<any> {
    const user = await this.authService.validateUser({ id });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
