import { Test, TestingModule } from '@nestjs/testing';

import { DataContextManager, FormnModule } from 'formn-nestjs-utils';
import { DefaultDataContext } from 'formn-nestjs-utils/dist/formn/default-data-context';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('Users Controller', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [
        UsersController,
      ],
      imports: [
        FormnModule,
      ],
      providers: [
        DataContextManager,
        DefaultDataContext,
        UsersService,
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
