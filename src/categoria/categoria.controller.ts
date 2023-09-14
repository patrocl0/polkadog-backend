import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CategoriaService } from './categoria.service';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  async getAll() {
    return this.categoriaService.getAll();
  }

  @Post('crear')
  async create(@Body() dto: any) {
    return this.categoriaService.createCategoria(dto);
  }

  @Delete(':idcategoria')
  async delete(@Param('idcategoria', ParseIntPipe) idcategoria: number) {
    return this.categoriaService.deleteCategoria(idcategoria);
  }
}
