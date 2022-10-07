import { IsEmail, IsNotEmpty, IsObject, IsString } from 'class-validator';
import { Cart } from './create-cart.dto';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  password: string;

  @IsObject({ each: true })
  readonly carts: Cart[];
}
