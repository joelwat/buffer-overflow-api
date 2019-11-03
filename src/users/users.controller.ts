import { Controller, Get, Param } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersSvc: UsersService) {
  }

  @Get()
  getAll(): Promise<User[]> {
    return this.usersSvc.retrieve();
  }
}
