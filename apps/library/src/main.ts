import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

// import { swagerMiddleware, yamlwtf } from './swagger/swaggerMiddleware';
import  * as swaggerUiExpress from 'swagger-ui-express';
import *as  yaml from 'js-yaml';
import * as path from 'path';
import * as fs from 'fs';
const swagger_path = path.resolve(__dirname, './assets/apidocs/swagger.yaml');
const doc = yaml.load(fs.readFileSync(swagger_path, 'utf8'));

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(doc));
  
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
