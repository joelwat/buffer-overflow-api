import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common';

import { ModelTransformerPipe } from 'formn-nestjs-utils';

import { UsersService } from './users.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersSvc: UsersService) {
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.usersSvc.deleteById(id);
  }

  @Get()
  retrieve(): Promise<User[]> {
    return this.usersSvc.retrieve();
  }

  @Get(':id')
  retrieveByID(@Param('id') id: number): Promise<User> {
    return this.usersSvc.retrieveById(id);
  }

  @Post()
  create(@Body(new ModelTransformerPipe()) user: User): Promise<User> {
    return this.usersSvc.create(user);
  }

  @Put()
  update(@Body(new ModelTransformerPipe()) user: User): Promise<User> {
    return this.usersSvc.updateModel(user);
  }
}
