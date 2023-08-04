import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async validateUesr(username: string, password: string) {
    const user = await this.userService.findOneByUsername(username);

    if (user && (await bcrypt.compare(password, user.password))) {
      // we don't want to return the password to the client
      // so we use destructuring to remove it from the user object
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
