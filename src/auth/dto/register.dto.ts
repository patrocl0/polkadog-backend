import { Transform } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  username: string;
  @IsString()
  @MinLength(6)
  @Transform(({ value }) => value.trim())
  password: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  rol: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  isActive: string;
}
