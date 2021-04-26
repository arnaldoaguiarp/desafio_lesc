import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import path from 'node:path';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
/*
  @Post(path: 'register') 
  async register(
    @Body(property:'name') name: string,
    @Body(property:'email') email: string,
    @Body(property:'password') password: string
  ) {
    
  }*/

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}


