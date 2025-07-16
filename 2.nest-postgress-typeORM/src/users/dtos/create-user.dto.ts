import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateProfileDto } from 'src/profile/dtos/create-profile.dto';

export class CreateUserDTO {
  @IsNotEmpty()
  @MaxLength(24)
  @IsNotEmpty({ message: 'Username is required' })
  username: string;

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

  @IsOptional()
  profile?: CreateProfileDto;
}
