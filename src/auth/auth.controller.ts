import {
  Controller,
  Body,
  Post,
  UseGuards,
  Req,
  HttpCode,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  @ApiOperation({ summary: 'Criar um novo usuário' })
  @ApiResponse({
    status: 201,
    description: 'Usuário criado com sucesso',
    type: User,
  })
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos' })
  @ApiResponse({
    status: 409,
    description: 'Email já existente',
  })
  signUp(@Body() CreateUserDto: CreateUserDto) {
    return this.authService.create(CreateUserDto);
  }

  @UseGuards(AuthGuard('local'))
  @Post('sign-in')
  @HttpCode(200)
  @ApiOperation({ summary: 'Realizar login de usuário' })
  @ApiResponse({
    status: 200,
    description: 'Usuário logado com sucesso',
  })
  @ApiResponse({ status: 401, description: 'Email ou senha incorretos' })
  signIn(@Req() req: any, @Body() loginUserDto: LoginUserDto) {
    return this.authService.signIn(req.user);
  }
}
