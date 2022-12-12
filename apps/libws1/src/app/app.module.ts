import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogueModule } from '@libws/catalogue';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CatalogueModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
