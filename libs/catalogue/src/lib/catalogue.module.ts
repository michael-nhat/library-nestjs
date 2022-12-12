import { ObjectionModule } from '@willsoto/nestjs-objection';
import { Module } from '@nestjs/common';
import { CatalogueController } from './catalogue.controller';
import { CatalogueService } from './catalogue.service';
import { SlonikModule } from 'nestjs-slonik';

@Module({
  imports: [
    SlonikModule.forRoot({
      connectionUri: 'postgres://postgres:postgres@localhost/lib2',
    }),
    ObjectionModule.register({
      config: {
        client: 'postgres',
        useNullAsDefault: true,
        connection: {
          database: process.env.DB_NNAME,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          host: process.env.DB_HOST,
          port: 5432,
          ssl: false,
        },
      },
    }),
    ObjectionModule.forFeature([]),
  ],
  controllers: [CatalogueController],
  providers: [CatalogueService],
  exports: [CatalogueService],
})
export class CatalogueModule {}
