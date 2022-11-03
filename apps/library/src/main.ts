import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

// import { swagerMiddleware, yamlwtf } from './swagger/swaggerMiddleware';
import * as swaggerUiExpress from 'swagger-ui-express';
import * as yaml from 'js-yaml';
import * as path from 'path';
import * as fs from 'fs';
import { resolveRefs, JsonRefsOptions } from 'json-refs';
const swagger_path = path.resolve(__dirname, './assets/apidocs/swagger.yaml');
const doc = yaml.load(fs.readFileSync(swagger_path, 'utf8'));

const options = {
  processContent: function (content) {
    return yaml.load(content);
  },
};

resolveRefs(doc as any, options as JsonRefsOptions).then(function (results) {
  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    // console.log(doc);
    app.use(
      '/docs',
      swaggerUiExpress.serve,
      swaggerUiExpress.setup(results.resolved)
    );

    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const port = process.env.PORT || 3333;
    await app.listen(port);
    Logger.log(
      `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
    );
  }

  bootstrap();
});
