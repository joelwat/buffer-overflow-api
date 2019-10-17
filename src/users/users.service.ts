import { Injectable } from '@nestjs/common';

import { DataContext } from 'formn';
import { DataContextManager } from 'formn-nestjs-utils';

import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  private readonly dc: DataContext;

  constructor(private readonly dcManager: DataContextManager) {
    this.dc = dcManager.dataContext;
  }

  getAll() {
    return this.dc
      .from(User, 'u')
      .select()
      .execute();
  }
}
