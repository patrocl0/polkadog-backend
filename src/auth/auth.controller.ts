/*
https://docs.nestjs.com/controllers#controllers
*/ import {
  ParseIntPipe,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  UseGuards,
  Request,
} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
// import { AuthGuard } from './guard/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    console.log(dto);

    return this.authService.register(dto);
  }

  @Post('login')
  // @UseGuards(AuthGuard)
  login(@Body() dto: LoginDto) {
    console.log(dto);

    return this.authService.login(dto);
  }

  //   @Get('profile')
  //   profile() {
  //     return req.user;
  //   }
}
