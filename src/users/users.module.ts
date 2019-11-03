import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersDao } from './users.dao';
import { UsersService } from './users.service';

@Module({
  controllers: [
    UsersController,
  ],
  exports: [
    UsersDao,
    UsersService,
  ],
  imports: [
  ],
  providers: [
    UsersDao,
    UsersService,
  ],
})
export class UsersModule {}
