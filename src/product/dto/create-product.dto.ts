import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'лого', description: 'имя категории' })
  readonly logo: string;

  @ApiProperty({ example: 'Зеленые шорты', description: 'имя продукта' })
  readonly name: string;

  @ApiProperty({ example: 'Цена товара', description: 'имя продукта' })
  readonly price: number;

  @ApiProperty({ example: 'Красивые шорты', description: 'описание продукта' })
  readonly description: string;
}
