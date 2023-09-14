import { ProductoEntity } from 'src/producto/producto.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';

@Entity({ name: 'categoria' })
export class CategoriaEntity {
  @PrimaryGeneratedColumn()
  idcategoria: number;
  @Column({ type: 'varchar', length: 100, nullable: false })
  nombrecategoria: string;

  // @ManyToMany((type) => ProductoEntity, (producto) => producto.idproducto)
  // producto: ProductoEntity[];
}
