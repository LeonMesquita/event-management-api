import { User } from '../entities/user.entity';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto extends User {
  @IsEmail()
  @ApiProperty({
    description: 'Email do usuário deve ser um email válido',
    example: 'pedro@gmail.com',
  })
  email: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  @ApiProperty({
    description: 'Senha do usuário deve conter entre 3 e 20 caracteres.',
    example: '123',
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: 'Nome do usuário.',
    example: 'Pedro da Silva',
  })
  name: string;
}
