import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';

import { AppModule } from './app.module';

import { MySQLDataContext, ConnectionOptions, DataContext } from 'formn';

async function bootstrap() {
  const connOpts: ConnectionOptions = require('../connections.json');
  const dataContext: DataContext    = new MySQLDataContext();

  let app: INestApplication;

  dataContext.connect(connOpts)
    .then(async () => {
      console.log('Database connected!');

      app = await NestFactory.create(AppModule);
      await app.listen(3000);
    })
    .catch((err) => {
      console.error('Failed to connect to database.');
      console.error(err);

      process.exit(1);
    });

  function gracefulShutdown() {
    console.log('Shutting down!');

    app.close();
    console.log('Http closed.');

    dataContext.end();
    console.log('Database disconnected.');

    process.exit(0);
  }

  // Handle <Ctrl> + c
  process.on('SIGTERM', gracefulShutdown);

}

bootstrap();
