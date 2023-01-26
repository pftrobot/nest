import {Global, Module} from '@nestjs/common';
import { CommonService } from './common-service';

// 전역 모듈 생성
@Global()
@Module({
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule { }
