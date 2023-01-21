import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const mockedUser: CreateUserDto = {
    email: 'any_email@gmail.com',
    name: 'any_name',
    password: 'any_password',
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/sign-up (POST) Should create a new user', async () => {
    return request(app.getHttpServer())
      .post('/auth/sign-up')
      .send(mockedUser)
      .expect(201);
  });

  it('/auth/sign-up (POST) Should throw error if email already exists', async () => {
    return request(app.getHttpServer())
      .post('/auth/sign-up')
      .send(mockedUser)
      .expect(409);
  });
});
