import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProfileDto {
  @IsString({ message: 'First name should be a string value.' })
  @MinLength(3, { message: 'First Name should have at least 3 charecter.' })
  @MaxLength(100)
  @IsOptional()
  firstName?: string;

  @IsString({ message: 'Last name should be a string value.' })
  @MinLength(3, { message: 'Last Name should have at least 3 charecter.' })
  @MaxLength(100)
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  @MaxLength(10)
  gender?: string;

  @IsOptional()
  @IsDate()
  dateOfBirth?: Date;

  @IsOptional()
  @IsString()
  bio?: Date;

  @IsOptional()
  @IsString()
  profileImage?: Date;
}
