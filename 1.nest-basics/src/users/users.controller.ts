import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { IUser, UsersService } from './users.service';
import { CreateUserDTO } from './dtos/create-user.dto';
import { GetUserParamDto } from './dtos/get-user-param.dto';

@Controller('users')
export class UsersController {
  @Get(':isMarried')
  getAllUsers(
    @Query('limit') limit: number,
    @Query('page') page: number,
    @Param() params: GetUserParamDto,
  ): IUser[] {
    const userService = new UsersService();
    console.log(params, limit);
    return userService.getAllUsers();
  }

  @Get(':id/:name/:gender')
  getUserById(
    @Param('id', ParseIntPipe) id: string,
    @Param('gender') gender: string,
  ) {
    return [id, gender];
  }

  @Post()
  createUser(@Body() user: CreateUserDTO) {
    return 'A new user has been created.';
  }
}
