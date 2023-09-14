import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCategoria {
  @IsString()
  @IsOptional()
  nombrecategoria?: string;
}
