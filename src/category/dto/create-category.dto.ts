import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ example: 'шорты', description: 'имя категории' })
  readonly name: string;
}
