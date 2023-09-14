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
  Req,
} from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoDto } from './dto/producto.dto';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Get()
  async getAll() {
    return this.productoService.getAll();
  }

  @Get(':idproducto')
  async findgById(@Param('idproducto', ParseIntPipe) idproducto: number) {
    return this.productoService.findgById(idproducto);
  }

  // @Get('categoria/:idcategoria')
  // async findgByCategoria(
  //   @Param('idcategoria', ParseIntPipe) idcategoria: number,
  // ) {

  //   return this.productoService.findgByCategoria(idcategoria);
  // }

  // @Get(':nombre_producto')
  // async findgByNombre(@Param('nombre_producto') nombre_producto: string) {
  //   return this.productoService.findgByNombre(nombre_producto);
  // }

  @Post('crear')
  async createProducto(@Body() dto: any) {
    return await this.productoService.createProducto(dto);
  }

  @Patch(':idproducto')
  updateProducto(
    @Param('idproducto') idproducto: number,
    @Body() dto: ProductoDto,
  ) {
    return this.productoService.updateProducto(idproducto, dto);
  }

  @Delete(':idproducto')
  async deleteProducto(@Param('idproducto', ParseIntPipe) idproducto: number) {
    return await this.productoService.delete(idproducto);
  }
}
