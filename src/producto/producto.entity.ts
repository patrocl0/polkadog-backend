import { CategoriaEntity } from 'src/categoria/categoria.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';

@Entity({ name: 'producto' })
export class ProductoEntity {
  @PrimaryGeneratedColumn()
  idproducto: number;

  @Column({ type: 'int', nullable: false })
  idcategoria: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre_producto: string;

  @Column({ type: 'int', nullable: false })
  precio: number;

  @Column({ type: 'varchar', length: 500, nullable: false })
  imagen: string;

  // @ManyToOne((type) => CategoriaEntity, (categoria) => categoria.idcategoria)
  // categoria: CategoriaEntity;
  @ManyToOne(() => CategoriaEntity, (categoria) => categoria.idcategoria)
  categoria: CategoriaEntity;
}
