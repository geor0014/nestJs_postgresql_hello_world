import {
  Body,
  Controller,
  Logger,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/loca-auth.guard';
import { createUserDto } from 'src/user/createUserDto';
import { UserService } from 'src/user/user.service';
import { JwtRefreshGuard } from './guards/refresh-jwt.auth.guard';

@Controller('auth')
export class AuthController {
  // we inject the AuthService into the constructor of the controller
  // so that Nest can create an instance of it and set it up as a provider
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard) // <== Apply the guard we created to the login route
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() createUserDto: createUserDto) {
    return await this.userService.create(createUserDto);
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  async refreshToken(@Request() req) {
    return this.authService.refreshToken(req.user);
  }
}
