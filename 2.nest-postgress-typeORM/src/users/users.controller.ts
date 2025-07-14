import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dtos/create-user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly userServices: UsersService) {}

  @Get()
  async getAllUsers(
    @Query('limit') limit: number,
    @Query('page') page: number,
    @Res() res: Response,
  ) {
    const result = await this.userServices.getAllUsers();
    res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      data: result,
    });
  }

  @Post()
  async createUser(@Body() user: CreateUserDTO, @Res() res: Response) {
    const result = await this.userServices.createUser(user);
    res.status(HttpStatus.CREATED).json({
      status: HttpStatus.CREATED,
      data: result,
    });
  }
}
