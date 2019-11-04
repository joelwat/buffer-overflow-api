import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';

import { AppModule } from './app.module';

import { BsyErrorHandlerFilter } from 'formn-nestjs-utils';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule, {cors: true});

  app.useGlobalFilters(new BsyErrorHandlerFilter());

  await app.listen(3000);

  // Handle <Ctrl> + c
  process.on('SIGTERM', gracefulShutdown);

  function gracefulShutdown() {
    console.log('Shutting down!');

    app.close();
    console.log('Http closed.');

    process.exit(0);
  }
}

bootstrap();
