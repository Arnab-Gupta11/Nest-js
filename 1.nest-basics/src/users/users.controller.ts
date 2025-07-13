import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { IUser, UsersService } from './users.service';
import { CreateUserDTO } from './dtos/create-user.dto';
import { Response } from 'express';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userServices: UsersService) {}

  @Get()
  getAllUsers(
    @Query('limit') limit: number,
    @Query('page') page: number,
    // @Param() params: GetUserParamDto,
  ): IUser[] {
    return this.userServices.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    const result = this.userServices.getUserById(id);
    res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      data: result,
    });
  }

  @Post()
  createUser(@Body() user: CreateUserDTO, @Res() res: Response) {
    const result = this.userServices.createUser(user);
    res.status(HttpStatus.CREATED).json({
      status: HttpStatus.CREATED,
      data: result,
    });
  }
  @Patch()
  updateUser(@Body() user: UpdateUserDto, @Res() res: Response) {
    // const result = this.userServices.createUser(user);
    res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      data: user,
    });
  }
}
