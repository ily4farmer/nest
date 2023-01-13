import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'user' })
export class User extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  isBanned: boolean;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: '' })
  banReason: string;
}
