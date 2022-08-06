# Konv Bank

Este é um projeto de testes para a vaga de Desenvolvedor Full Stack NodeJS Pleno na empresa Konv.\
[DEMO](https://konvbank.netlify.app/)

## Rodando localmente - Back-end

Crie um arquivo .env como copia do arquivo .env.example editando as variáveis de ambiente de acordo com os dados do seu banco (MySQL)

Execute o comando `yarn` para instalar todos os pacotes.\
Depois execute `yarn typeorm-dev migration:run` para que sejam criadas devidamentes as tabelas no banco informado nas variaveis de ambiente.

Em seguida `yarn dev:server` para que a aplicação inicie.

## Rodando localmente - Front-end

Edite no arquivo .env.development a variável `REACT_APP_HOST` com a url que aponte para o back-end da aplicação (por padrão está http://localhost:3333)

Execute o comando `yarn` para instalar todos os pacotes.\
Em seguida, `yarn start` para que a aplicação inicie.

## Stack utilizada

**Front-end:** React, Typescript, Styled Components, Material UI, React Toastify

**Back-end:** Node, Express, Typescript, TypeORM, MySQL
