import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
  ) {}

  isAuthenticated: boolean = false;

  loginUser(email: string, pass: string) {
    const user = this.userService.users.find(
      (user) => user.email === email && user.password === pass,
    );
    if (user) {
      this.isAuthenticated = true;
      return 'My-Token';
    }
    return "User doesn't exist.";
  }
}
