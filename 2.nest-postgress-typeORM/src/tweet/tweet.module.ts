import { Module } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { TweetController } from './tweet.controller';
import { UserModule } from 'src/users/users.module';

@Module({
  providers: [TweetService],
  controllers: [TweetController],
})
export class TweetModule {}
