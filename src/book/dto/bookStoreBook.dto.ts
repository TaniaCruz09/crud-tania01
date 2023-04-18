import { IsNotEmpty, MinLength, IsString } from 'class-validator';

export class CreateBookDTO {
  @IsString()
  @MinLength(30)
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  autor: string;

  @IsString()
  @IsNotEmpty()
  editorial: string;

  @IsString()
  @IsNotEmpty()
  genre: string;
}
