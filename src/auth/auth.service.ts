import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(user: User) {
    const oneuser = await this.usersService.findUser(user.email);
    console.log('from validate user', oneuser);

    const isMatch = await bcrypt.compare(user.password, oneuser.password);
    if (oneuser && isMatch) {
      const { password, ...result } = oneuser;
      console.log(password, result);
      return result;
    }
    console.log('didnt find anything boss');
    return null;
  }

  async login(user: User) {
    console.log('..--------');
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
