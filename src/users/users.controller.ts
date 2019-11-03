import { Controller, Get } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersSvc: UsersService) {
  }

  @Get()
  retrieve(): Promise<User[]> {
    return this.usersSvc.retrieve();
  }

  @Get(':id')
  retrieveByID(@Param('id') id: number): Promise<User> {
    return this.usersSvc.retrieveById(id);
  }
}
