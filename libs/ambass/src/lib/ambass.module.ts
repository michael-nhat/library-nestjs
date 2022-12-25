import { Module } from '@nestjs/common';
import { AmbassController } from './ambass.controller';
import { AmbassService } from './ambass.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [AmbassController],
  providers: [AmbassService],
  exports: [AmbassService],
  imports: [UserModule, AuthModule],
})
export class AmbassModule {}
