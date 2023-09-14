import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Repository } from 'typeorm';
import { CategoriaEntity } from './categoria.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoria } from './dto/crearCategoria.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(CategoriaEntity)
    private categoriaRepository: Repository<CategoriaEntity>,
  ) {}

  async getAll(): Promise<CategoriaEntity[]> {
    const list = await this.categoriaRepository.find();

    if (!list.length) {
      throw new NotFoundException({ message: 'La lista esta vacia' });
    }

    return list;
  }

  async createCategoria(dto: CreateCategoria): Promise<any> {
    const categoria = this.categoriaRepository.create(dto);

    await this.categoriaRepository.save(categoria);

    return { message: 'Categoria creada correctamente' };
  }

  async updateCategoria(
    idcategoria: number,
    dto: CreateCategoria,
  ): Promise<any> {
    return this.categoriaRepository.update({ idcategoria }, { ...dto });
  }

  async deleteCategoria(idcategoria: number): Promise<any> {
    const categoria = await this.categoriaRepository.findOne({
      where: { idcategoria },
    });
    await this.categoriaRepository.remove(categoria);

    return {
      message: `Categoria ${categoria.nombrecategoria} eliminada correctamente`,
    };
  }
}
