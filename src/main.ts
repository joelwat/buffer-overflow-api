import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';

import { AppModule } from './app.module';

import { BsyErrorHandlerFilter } from 'formn-nestjs-utils';

function gracefulShutdown(app: INestApplication) {
  console.log('Shutting down!');

  app.close()
    .then(() => console.log('Http closed.'));

  process.exit(0);
}

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule, {cors: true});

  app.useGlobalFilters(new BsyErrorHandlerFilter());

  app.listen(3001)
    .then(() => console.log('Listening on port 3000'));

  // Handle <Ctrl> + c
  process.on('SIGTERM', gracefulShutdown.bind(null, app));
}

bootstrap();
