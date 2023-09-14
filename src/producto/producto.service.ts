import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductoEntity } from './producto.entity';
// import { ProductoRepository } from './producto.repository';
import { ProductoDto } from './dto/producto.dto';
import { UpdateTodo } from './dto/update-producto.dto';
import * as bcrypt from 'bcrypt';
import { CategoriaEntity } from 'src/categoria/categoria.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(ProductoEntity)
    private productoRepository: Repository<ProductoEntity>,
  ) {}

  async getAll(): Promise<ProductoEntity[]> {
    const list = await this.productoRepository.find();

    console.log(list);
    if (!list.length) {
      throw new NotFoundException({ message: 'La lista esta vacia' });
    }

    return list;
  }

  async findgByCategoria(idcategoria: number): Promise<any> {
    return this.productoRepository
      .createQueryBuilder('producto')
      .select([
        'producto.nombre_producto as producto',
        'producto.precio as precio',
        'producto.imagen as imagen',
      ])
      .where('producto.idcategoria = :idcategoria', { idcategoria })
      .innerJoin(CategoriaEntity, 'o')
      .getMany();
  }

  async findgById(idproducto: number): Promise<ProductoEntity> {
    const producto = await this.productoRepository.findOne({
      where: { idproducto },
    });
    if (!producto) {
      throw new NotFoundException({ message: 'NO Existe' });
    }

    return producto;
  }

  async findgByNombre(nombre_producto: string): Promise<ProductoEntity> {
    const producto = await this.productoRepository.findOne({
      where: { nombre_producto },
    });
    if (!producto) {
      throw new NotFoundException({ message: 'NO Existe' });
    }

    return producto;
  }

  async createProducto(dto: ProductoDto): Promise<any> {
    const producto = this.productoRepository.create(dto);

    return await this.productoRepository.save(producto);
  }

  async updateProducto(idproducto: number, dto: ProductoDto): Promise<any> {
    return this.productoRepository.update({ idproducto }, { ...dto[0] });
  }

  async delete(idproducto: number): Promise<any> {
    const producto = await this.productoRepository.findOne({
      where: { idproducto },
    });
    await this.productoRepository.remove(producto);

    return {
      message: `Producto ${producto.nombre_producto} eliminado correctamente`,
    };
  }
}
