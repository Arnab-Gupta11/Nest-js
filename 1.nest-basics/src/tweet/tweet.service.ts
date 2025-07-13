import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

export interface ITweet {
  text: string;
  date: Date;
  userId: number;
}

@Injectable()
export class TweetService {
  constructor(private readonly userService: UsersService) {}
  tweets: ITweet[] = [
    { text: 'some tweet', date: new Date(2024 - 5 - 3), userId: 1 },
    { text: 'some other tweet', date: new Date(2025 - 5 - 3), userId: 2 },
    { text: 'some more tweet', date: new Date(2025 - 7 - 1), userId: 1 },
  ];

  getUserTweets(userId: number) {
    const user = this.userService.getUserById(userId);
    return this.tweets
      .filter((item) => item.userId === userId)
      .map((item) => ({
        text: item.text,
        date: item.date,
        userName: user?.name,
      }));
  }
}
