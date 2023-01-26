import { Module } from '@nestjs/common';
import { ApiController } from './api/api.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseService } from './base-service';
import { ServiceA } from './service-A';
import { ServiceB } from './service-B';
import { UsersModule } from './users/users.module';
import { EmailService } from './email/email.service';

@Module({
  controllers: [ApiController, AppController],
  providers: [AppService, BaseService, ServiceA, ServiceB, EmailService],
  imports: [UsersModule],
})
export class AppModule { }
