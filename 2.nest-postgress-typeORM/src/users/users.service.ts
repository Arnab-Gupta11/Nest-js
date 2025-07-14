import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
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

  async createUser(userDTO: CreateUserDTO) {
    //Check if user already exist.
    const user = await this.userRepository.findOne({
      where: {
        email: userDTO.email,
      },
    });
    if (user) {
      return 'A user with this email already exist.';
    }

    //Create New User.
    let newUser = this.userRepository.create(userDTO);
    newUser = await this.userRepository.save(newUser);
    return newUser;
  }
}
