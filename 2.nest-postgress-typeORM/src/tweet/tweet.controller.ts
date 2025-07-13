import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Res,
} from '@nestjs/common';
import { TweetService } from './tweet.service';
import { Response } from 'express';

@Controller('tweet')
export class TweetController {
  constructor(private tweetService: TweetService) {}

  @Get(':userId')
  getUserTweets(
    @Param('userId', ParseIntPipe) userId: number,
    @Res() res: Response,
  ) {}
}
