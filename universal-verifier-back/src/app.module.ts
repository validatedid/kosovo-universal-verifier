import { Module } from '@nestjs/common';
import { AuthorizationModule } from './modules/authorization/authorization.module';

@Module({
  imports: [AuthorizationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
