import { Module, Global } from '@nestjs/common';
import { LenndController } from './lennd.controller';

@Global()
@Module({
  controllers: [LenndController],
  providers: [],
  exports: [],
})
export class LenndModule {}
