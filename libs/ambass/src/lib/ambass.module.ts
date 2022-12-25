import { Module } from '@nestjs/common';
import { AmbassController } from './ambass.controller';
import { AmbassService } from './ambass.service';

@Module({
  controllers: [AmbassController],
  providers: [AmbassService],
  exports: [AmbassService],
})
export class AmbassModule {}
