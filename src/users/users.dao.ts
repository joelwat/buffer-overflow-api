import { Injectable } from '@nestjs/common';

import { Dao, DataContextManager } from 'formn-nestjs-utils';

import { User } from '../entities/user.entity';

@Injectable()
export class UsersDao extends Dao<User> {
  constructor(private readonly dcManager: DataContextManager) {
    super(dcManager, User, 'u');
  }
}
