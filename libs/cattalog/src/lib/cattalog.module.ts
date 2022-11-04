import { Module, Global } from '@nestjs/common';
import { CattalogController } from './cattalog.controller';

@Global()
@Module({
  controllers: [CattalogController],
  providers: [],
  exports: [],
})
export class CattalogModule {}
