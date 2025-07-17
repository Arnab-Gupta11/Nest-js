import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from './dtos/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //Sign up user.
  @Post('sign-up')
  signUp(@Body() userDto: CreateUserDTO) {
    return this.authService.signUp(userDto);
  }

  //Sign up user.
  @Post('sign-in')
  signIn(@Body() userDto: CreateUserDTO) {
    return this.authService.signIn(userDto);
  }
}
