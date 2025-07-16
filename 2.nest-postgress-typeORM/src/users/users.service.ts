import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { Repository } from 'typeorm';
import { Users } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async getAllUsers() {
    return await this.userRepository.find();
  }

  public async createUser(userDTO: CreateUserDTO) {
    //Check if user already exist.
    userDTO.profile = userDTO.profile ?? {};
    //Create New User.
    let newUser = this.userRepository.create(userDTO);
    return await this.userRepository.save(newUser);
  }
}
