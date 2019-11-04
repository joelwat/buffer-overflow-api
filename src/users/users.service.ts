import { Injectable } from '@nestjs/common';

import { CRUDService, DataContextManager } from 'formn-nestjs-utils';

import { UsersDao } from './users.dao';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService extends CRUDService<User> {

  constructor(
    protected readonly dao: UsersDao,
    protected readonly dc: DataContextManager,
  ) {
    super(dao);
  }

  update(model: User) {
    model.updatedOn = new Date();

    return this.dao.updateModel(model);
  }
}
