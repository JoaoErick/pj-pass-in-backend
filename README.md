# Pass.in API

O Pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema irá escanear a credencial do participante para permitir a entrada no evento.

## Descrição

Este repositório consiste na construção do back-end da aplicação com uma API REST.

### Tecnologias

- [NodeJs 2.12+](https://nodejs.org/dist/v20.12.1/node-v20.12.1-x64.msi)
- [TypeScript 5.3+](https://www.typescriptlang.org/download)
- [Prisma ORM 5.11+](https://www.prisma.io/docs/getting-started/quickstart)
- [Fastify 4.26+](https://fastify.dev/docs/latest/Guides/Getting-Started/)
- [Zod 3.22+](https://zod.dev/?id=installation)

### Navegação

- \> Pass\.in API
- [Pass.in Mobile]()

## Requisitos

### Requisitos funcionais

- [ ]  O organizador deve poder cadastrar um novo evento;
- [ ]  O organizador deve poder visualizar dados de um evento;
- [ ]  O organizador deve poser visualizar a lista de participantes;
- [ ]  O participante deve poder se inscrever em um evento;
- [ ]  O participante deve poder visualizar seu crachá de inscrição;
- [ ]  O participante deve poder realizar check-in no evento;

### Regras de negócio

- [ ]  O participante só pode se inscrever em um evento uma única vez;
- [ ]  O participante só pode se inscrever em eventos com vagas disponíveis;
- [ ]  O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais

- [ ]  O check-in no evento será realizado através de um QRCode;

## Getting Started

1. Clone este repositório;
2. Garanta que existe a versão 2.12+ do NodeJs instalada na sua máquina;
3. Instale as dependências do projeto:
    ```cmd
    npm install 
    ```
4. Execute o projeto:
    ```cmd
    npm run dev
    ```
> Por padrão, a API será executada no endereço http://localhost:3333

## Documentação da API

A documentação da API foi realizada com o Swagger e pode ser consultada através do endereço: <http://localhost:3333/docs>.

