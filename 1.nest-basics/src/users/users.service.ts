import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

export interface IUser {
  id?: number;
  name: string;
  email: string;
  gender: string;
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
      email: 'rahim@gmail.com',
      gender: 'male',
      password: '12345',
    },
    {
      id: 2,
      name: 'Puja',
      email: 'puja@gmail.com',
      gender: 'female',
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
