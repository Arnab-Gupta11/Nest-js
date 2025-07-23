import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class authDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
