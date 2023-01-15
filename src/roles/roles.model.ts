import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

export enum RoleVariants {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

interface RoleCreationAttrs {
  type: RoleVariants;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'Уникальное Значение роли ' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
    defaultValue: RoleVariants.USER,
  })
  type: RoleVariants;

  @ApiProperty({ example: 'Администратор', description: 'Описание роли' })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;
}
