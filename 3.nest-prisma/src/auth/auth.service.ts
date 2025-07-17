import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { CreateUserDTO } from './dtos/create-user.dto';
import { PrismaClientKnownRequestError } from 'generated/prisma/runtime/library';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signUp(user: CreateUserDTO) {
    //generate the hash password.
    const hash = await argon.hash(user.password);

    //Save the new user in the database
    try {
      const newUser = await this.prisma.user.create({
        data: {
          email: user.email,
          hash,
        },
      });
      // delete newUser.hash;
      return newUser;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credential taken.');
        }
      }
      throw error;
    }
  }

  async signIn(user: CreateUserDTO) {
    const isUserExit = await this.prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });
    if (!isUserExit) {
      throw new ForbiddenException('Account with this email does not exist.');
    }

    const isPasswordMatches = await argon.verify(
      isUserExit.hash,
      user.password,
    );
    if (!isPasswordMatches) {
      throw new ForbiddenException('Password do not match.');
    }

    return user;
  }
}
