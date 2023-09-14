/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { BadRequestException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
// import { UserDto } from './dto/user.dto';
import { RegisterDto } from 'src/auth/dto/register.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async create(dto: RegisterDto): Promise<any> {
    const user = await this.userRepository.findBy({ username: dto.username });

    if (user) {
      throw new BadRequestException('User alredy exists');
    }

    return await this.userRepository.save(dto);
  }

  async searchUser(dto: any): Promise<any> {
    const { username, password } = dto;
    const user = await this.userRepository.findBy({ username: username });

    if (!user) {
      throw new UnauthorizedException('Username is wrong ');
    }

    const isPasswordValid = await bcrypt.compare(password, user[0].password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Password is wrong');
    }

    const payload = { username: user[0].username };

    const token = await this.jwtService.signAsync(payload);

    return { token, username };
  }
}
