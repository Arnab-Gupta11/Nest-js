import { Body, Controller, Post } from '@nestjs/common';
import { authDto } from './dtos/auth.dto';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('create-user')
  async signUp(@Body() userData: authDto) {
    return await this.authService.signUp(userData);
  }
}
