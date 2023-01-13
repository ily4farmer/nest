import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Category } from 'src/category/category.model';

@Table({ tableName: 'product' })
export class Product extends Model {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ApiProperty({
    example: 'base64:ffdgdf',
    description: 'картинка в формате base64',
  })
  @Column({ type: DataType.STRING })
  logo: string;

  @ApiProperty({ example: 'Fable green', description: 'имя категории' })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @ApiProperty({ example: 456, description: 'цена товара' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  price: number;

  @ApiProperty({
    example: 'лучшие шорты в мире',
    description: 'описание товара',
  })
  @Column({ type: DataType.STRING, allowNull: false, defaultValue: '' })
  description: string;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;
}
