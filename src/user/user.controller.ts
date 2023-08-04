import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { createUserDto, updateUserDto } from './createUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: createUserDto) {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: updateUserDto) {
    return this.userService.update(id, updateUserDto);
  }
}
