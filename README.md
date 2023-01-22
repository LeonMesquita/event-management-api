

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição


API de gerenciamento de eventos desenvolvida em [Nest](https://github.com/nestjs/nest).

## URL da API
```bash
# Via localhost
http://localhost:5000/api/
```

## Documentação Swagger
```bash
# Via localhost
http://localhost:5000/api/docs
```



## Rodando a aplicação no Docker
```bash
# criar um arquivo .env na raiz e definir as variáveis de ambiente necessárias para a imagem do Postgres. Exemplo:

DATABASE_URL=postgresql://postgres:postgres@event_management_postgres:5432/event_management_db

POSTGRES_USER=postgres 

POSTGRES_PASSWORD=postgres

POSTGRES_DB=event_management_db

JWT_SECRET=12345

# Executar o comando
$ docker-compose up --build
```


## Rodando os testes no Docker
```bash
# Os testes utilizam outro container Postgres específico para testes, por isso certifique-se de criar um arquivo .env.test e definir as variáveis de ambiente do banco de testes. Exemplo:

DATABASE_URL=postgresql://postgres:postgres@event_management_postgres:5432/event_management_db_test

POSTGRES_USER=postgres

POSTGRES_PASSWORD=postgres

POSTGRES_DB=event_management_db_test

JWT_SECRET=12345


# Executando testes E2E
$ docker-compose -f docker-compose-tests.yml run crud_doctors_app npm run test:e2e
```






## Rodando a aplicação na máquina local
```bash
# Criar um arquivo .env na raiz e inserir as variáveis de ambiente necessárias. Exemplo:

DATABASE_URL=postgres://postgres:postgres@localhost:5432/event_management_db

JWT_SECRET=12345


# install
$ npm install --force

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Rodando os testes na máquina local

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
