import { Injectable } from '@nestjs/common';
import { createUserDto } from './createUserDto';

@Injectable()
export class UserService {
  findOne(id: number) {
    return {
      id: id,
    };
  }

  create(createUserDto: createUserDto) {
    return 'User created';
  }
}
