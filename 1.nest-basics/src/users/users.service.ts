import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

export interface IUser {
  id: number;
  name: string;
  email: string;
  age: number;
  gender: string;
  isMarried: boolean;
  password: string;
}

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  users: IUser[] = [
    {
      id: 1,
      name: 'Rahim',
      age: 24,
      email: 'rahim@gmail.com',
      gender: 'male',
      isMarried: false,
      password: '12345',
    },
    {
      id: 2,
      name: 'Puja',
      age: 26,
      email: 'puja@gmail.com',
      gender: 'female',
      isMarried: true,
      password: '12345',
    },
  ];

  getAllUsers() {
    if (this.authService.isAuthenticated) {
      return this.users;
    }
    return 'You are not Authorized';
  }
  getUserById(id: number) {
    return this.users.find((item) => item.id === id);
  }
  createUser(user: IUser) {
    this.users.push(user);
    return this.users;
  }
}
