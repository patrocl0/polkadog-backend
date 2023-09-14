/*
https://docs.nestjs.com/providers#services
*/

import {
  Controller,
  ParseIntPipe,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(dto: RegisterDto) {
    dto.password = await bcrypt.hash(dto.password, 12);

    return await this.userService.create(dto);
  }

  async login(dto: LoginDto) {
    return await this.userService.searchUser(dto);
  }
}
