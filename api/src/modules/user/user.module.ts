import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '../auth/auth.service';
import { PasswordService } from '../auth/password.service';
import { User } from './models/user.model';
import { UserMutationsResolver } from './resolvers/user.mutations.resolver';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UserService,
    UserMutationsResolver,
    AuthService,
    JwtService,
    PasswordService,
    ConfigService,
  ],
  exports: [UserService],
})
export class UserModule {}
