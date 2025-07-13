import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  loginUser(
    @Body() loginInfo: { email: string; password: string },
    @Res() res: Response,
  ) {
    const result = this.authService.loginUser(
      loginInfo.email,
      loginInfo.password,
    );
    res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      data: result,
    });
  }
}
