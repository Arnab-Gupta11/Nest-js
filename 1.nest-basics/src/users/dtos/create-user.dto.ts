import {
  IsBoolean,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  id: number;

  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNumber()
  age: number;

  @IsString()
  @IsOptional()
  gender: string;

  @IsBoolean()
  isMarried: boolean;
}
