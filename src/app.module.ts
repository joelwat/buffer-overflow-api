import { Module } from '@nestjs/common';

import { ConnectionsFileReader } from 'formn';

import { FormnModule } from 'formn-nestjs-utils';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    FormnModule.forRoot(
      new ConnectionsFileReader()
        .readConnectionOptions('./connections.json')[0],
    ),
  ],
  controllers: [
    AppController,
    UsersController,
  ],
  providers: [
    AppService,
    UsersService,
  ],
})
export class AppModule {}
