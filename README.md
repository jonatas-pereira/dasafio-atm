<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Desafio técnico Morada.ai: Caixa eletrôcico

## Description

Teste realizado para vaga de estágio da Morada.ai, desafio envolve a implementação para um serviço de saque de caixa eletrônico. Basicamente, envolve o processo pelo qual é realizada a operação. Para esse desafio, foi utilizado o framework NestJS para a criação da API com endpoint que realiza esse processo, que por sua vez se dá por meio da entrada de um determidado valor inteiro e positvo no body da requisição, definido pelo método POST, e que tem como resposta a chamada um JSON com a quantidade de cédulas referente a cada valor de cédula disponível na nossa moeda.

### Corpo da requisição:

- URL: /api/saque
- Método: POST
- Entrada (JSON):

```json
{
  "valor": 380,
}
```

### Regras de validação

- valor deve ser um número inteiro e positivo
- Deve ser maior que 1
- O valor deve ser componível pelas notas disponíveis
- Valores não decomponíveis retornam erro de valor inválido

### Resposta - 200 OK

```json
{
  "100": 3,
  "50": 1,
  "20": 1,
  "10": 1,
  "5": 0,
  "2": 0
}
```

### Resposta — 400 Valor inválido

```json
{
  "message": [
    "Valor invalido"
  ],
  "error": "BAD_REQUEST",
  "statusCode": 400
}
```

### Testes unitários

Para assegurar o cumprimento correto da regras de negócio na operação, foram realizados testes para validar seu comportamento em diferentes cenários.

### Principais desafios no teste

Modelar a arquitetura da solução foi um dos principais desafios do projeto. A escolha pelo NestJS foi determinante, pois o framework oferece uma base sólida para a construção de aplicações organizadas, escaláveis e alinhadas aos princípios SOLID. Sua estrutura modular facilitou tanto o desenvolvimento quanto facilita em manutenção e futura evolução da solução. 

Mas em especial a lógica da operação para contagem das notas, exigiu muita análise sobre a solução desse problema.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```