import { IsNumber, IsString } from 'class-validator';

export class Cart {
  @IsString()
  name: string;

  @IsString()
  details: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;

  @IsString({ each: true })
  images: string[];
}
