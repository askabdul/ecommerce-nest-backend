import { IsEmail, IsObject, IsString } from 'class-validator';
import { Cart } from './create-cart.dto';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsObject({ each: true })
  carts: Cart[];
}
