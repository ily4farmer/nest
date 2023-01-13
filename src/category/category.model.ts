import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Product } from 'src/product/product.model';

interface CategoryCreationAttr {
  name: string;
}

@Table({ tableName: 'category' })
export class Category extends Model<Category, CategoryCreationAttr> {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ApiProperty({ example: 'шорты', description: 'имя категории' })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @HasMany(() => Product)
  products: Product[];
}
