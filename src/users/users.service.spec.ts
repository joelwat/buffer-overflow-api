import { Test, TestingModule } from '@nestjs/testing';

import { DataContextManager, FormnModule } from 'formn-nestjs-utils';
import { DefaultDataContext } from 'formn-nestjs-utils/dist/formn/default-data-context';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        FormnModule,
      ],
      providers: [
        UsersService,
        DataContextManager,
        DefaultDataContext,
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
