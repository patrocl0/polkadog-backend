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
  DeleteDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  username: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 45, nullable: false })
  rol: string;

  @Column({ type: 'varchar', length: 45, nullable: false })
  isActive: string;

  // @ManyToOne((type) => CategoriaEntity, (categoria) => categoria.idcategoria)
  // categoria: CategoriaEntity;
  // @ManyToOne(() => CategoriaEntity, (categoria) => categoria.nombrecategoria)
  // @JoinColumn({idcategoria:'idcategoria'})
  // categoria: CategoriaEntity;
}
