import { Injectable } from '@nestjs/common';

export interface IUser {
  id: number;
  name: string;
  email: string;
  age: number;
  gender: string;
  isMarried: boolean;
}

@Injectable()
export class UsersService {
  users: IUser[] = [
    {
      id: 1,
      name: 'Rahim',
      age: 24,
      email: 'rahim@gmail.com',
      gender: 'male',
      isMarried: false,
    },
    {
      id: 2,
      name: 'Puja',
      age: 26,
      email: 'puja@gmail.com',
      gender: 'female',
      isMarried: true,
    },
  ];

  getAllUsers() {
    return this.users;
  }
  getUserById(id: number) {
    return this.users.find((item) => item.id === id);
  }
  createUser(user: IUser) {
    this.users.push(user);
    return this.users;
  }
}
