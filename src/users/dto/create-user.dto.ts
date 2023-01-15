import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'abc@gmail.com', description: 'логин пользователя' })
  readonly email: string;

  @ApiProperty({ example: '12345', description: 'пароль пользователя' })
  readonly password: string;
}
