import {Body, Controller, Get, HttpCode, Param, Patch, Req, Res} from '@nestjs/common';
import { AppService } from './app.service';
import {Request} from "express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  /*
  getHello(@Req() req: Request): string {
    console.log('::: req ',req)
    return this.appService.getHello()
  }
  */
}
