import { IsEmail, IsNotEmpty, IsObject, IsString } from 'class-validator';
import { Cart } from './create-cart.dto';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsObject({ each: true })
  carts: Cart[];
}
