import { CatalogueModule } from '@library/catalogue';
import { LendingUiRestModule } from '@library/lending/ui-rest';
import { Module } from '@nestjs/common';
import { AppCoreModule } from './app-core.module';
import { DbModule } from './db.module';
import { SlonikModule} from 'nestjs-slonik';

@Module({
  imports: [
    AppCoreModule,
    CatalogueModule,
    LendingUiRestModule,
    DbModule,
    SlonikModule.forRoot({
      connectionUri: 'postgres://postgres@postgres@localhost/lib2',
    })
  ],
})
export class AppModule {}
