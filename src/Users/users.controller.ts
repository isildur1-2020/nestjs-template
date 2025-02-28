import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('/mae')
export class UsersController {
  constructor(private readonly appService: UsersService) {}

  @Get()
  getHello(): Promise<User[]> {
    return this.appService.findAll();
  }
}
