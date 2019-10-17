import { Controller, Get } from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersSvc: UsersService) {
  }

  @Get()
  getAll() {
    return this.usersSvc.getAll();
  }
}
