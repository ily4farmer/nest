import { ApiProperty } from '@nestjs/swagger';
import { RoleVariants } from '../roles.model';

export class CreateRoleDto {
  @ApiProperty({ example: RoleVariants.USER, description: 'тип роли' })
  readonly type: RoleVariants;

  @ApiProperty({ example: 'Админ сайта', description: 'имя роли' })
  readonly description: string;
}
