import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTodo {
  @IsString()
  @IsOptional()
  nombre_producto?: string;

  @IsString()
  @IsOptional()
  precio?: number;

  @IsString()
  @IsOptional()
  imagen?: string;
}
