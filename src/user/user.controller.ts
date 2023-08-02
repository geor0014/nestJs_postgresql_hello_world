import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createUserDto } from './createUserDto';

@Controller('user')
export class UserController {
  @Get(':id')
  findAll(@Param('id') id: string) {
    return {
      user: {
        id: id,
      },
    };
  }

  @Post()
  create(@Body() createUserDto: createUserDto) {
    return createUserDto;
  }
}
