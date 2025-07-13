import {
  IsBoolean,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDTO {
  @IsString({ message: 'First name should be a string value.' })
  @IsNotEmpty({ message: 'First name is required' })
  @MinLength(3, { message: 'First Name should have at least 3 charecter.' })
  @MaxLength(100)
  firstName: string;

  @IsString({ message: 'Last name should be a string value.' })
  @IsNotEmpty({ message: 'Last name is required' })
  @MinLength(3, { message: 'Last Name should have at least 3 charecter.' })
  @MaxLength(100)
  lastName: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, { message: 'password should have at least 8 charecter. long' })
  @MaxLength(100)
  password: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'Email is required' })
  @MaxLength(100)
  email: string;

  @IsString()
  @IsOptional()
  @MaxLength(10)
  gender?: string;
}
