/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  ParseIntPipe,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async register(@Body() dto: UserDto) {
    dto.password = await bcrypt.hash(dto.password, 12);

    console.log(dto);

    // return await this.userService.register(dto);
  }

  //   @Post()
  //   async getUser(@Body() dto: any) {
  //     return await this.userService.log(dto);
  //   }
}
