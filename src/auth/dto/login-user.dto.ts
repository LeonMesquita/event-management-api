import { User } from '../entities/user.entity';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto extends User {
  @IsEmail()
  @ApiProperty({
    description: 'Email do usuário',
    example: 'pedro@gmail.com',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'Senha do usuário.',
    example: '123',
  })
  password: string;
}
