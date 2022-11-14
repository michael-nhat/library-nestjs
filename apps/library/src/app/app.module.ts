import { CatalogueModule } from '@library/catalogue';
import { LendingUiRestModule } from '@library/lending/ui-rest';
import { Module } from '@nestjs/common';
import { AppCoreModule } from './app-core.module';
import { DbModule } from './db.module';

@Module({
  imports: [
    AppCoreModule,
    CatalogueModule,
    LendingUiRestModule,
    DbModule
  ],
})
export class AppModule {}
