import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const password = await bcrypt.hash(createUserDto.password, 10);
    createUserDto.password = password;
    return await this.usersService.createUser(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: object) {
    return this.usersService.findOne({ id });
  }

  @Post('userByEmail')
  findUser(@Body('email') email: string) {
    return this.usersService.findUser(email);
  }
}
