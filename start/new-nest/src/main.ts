import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Test} from "@nestjs/testing";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8520);
}
bootstrap();
