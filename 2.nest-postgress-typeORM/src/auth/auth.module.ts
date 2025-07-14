import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
