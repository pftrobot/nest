import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

// 프로바이더 등록
@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
