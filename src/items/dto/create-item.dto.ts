import { IsNumber, IsString } from 'class-validator';

export class CreateItemDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly details: string;

  @IsNumber()
  readonly quantity: number;

  @IsNumber()
  readonly price: number;

  @IsString()
  readonly status: string;

  @IsString({ each: true })
  readonly images: string[];
}
