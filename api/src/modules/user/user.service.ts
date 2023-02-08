import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './models/user.model';
import { BaseUserInput, RegisterUserInput } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async createUser(input: RegisterUserInput) {
    const user = this.userRepository.create(input);
    await user.save();
    return user;
  }

  async getUser(filter: Partial<BaseUserInput>) {
    return await this.userRepository.findOneOrFail(filter);
  }
}
