import { Injectable } from '@nestjs/common';
import { createUserDto, updateUserDto } from './createUserDto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async findOne(id: number) {
    return await this.userRepo.findOne({
      where: {
        id,
      },
    });
  }

  async create(createUserDto: createUserDto) {
    const user = await this.userRepo.create(createUserDto);
    return await this.userRepo.save(user);
  }

  async update(id: number, updateUserDto: updateUserDto) {
    return await this.userRepo.update(id, updateUserDto);
  }

  async findOneByUsername(username: string) {
    return await this.userRepo.findOne({
      where: {
        email: username, // we find the user that has the same email as the username
      },
    });
  }
}
