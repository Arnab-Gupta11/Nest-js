import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { authDto } from './dtos/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signUp(userData: authDto) {
    try {
      const hash = await bcrypt.hash(userData.password, 12);
      console.log('Hash Password===>', hash);
      const result = await this.prisma.user.create({
        data: {
          email: userData.email,
          hash,
        },
      });
      console.log('Result======>', result);
      return result;
    } catch (error) {
      return error;
    }
  }
}
