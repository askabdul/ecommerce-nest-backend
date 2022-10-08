import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    let user: User = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (user) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }
    user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ id: +id });

    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }

    return user;
  }

  async findUser(email: string) {
    const user = await this.userRepository.findOneBy({ email: email });

    if (!user) {
      throw new NotFoundException(`User #${email} not found`);
    }

    return user;
  }
}
