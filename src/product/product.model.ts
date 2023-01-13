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
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING })
  logo: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  price: number;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: '' })
  description: string;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;
}
