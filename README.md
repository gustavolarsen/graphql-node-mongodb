# graphql-node-mongodb
 Projeto de GraphQL e NodeJS com conexão ao MongoDB

<p align="center">
    <img alt="graphql-nodejs-mongodb" title="GraphQL" src=".github/logo.png" width="400px" />
</p>


## Projeto

Um pequeno projeto de estudos de criação de API em NodeJS com GraphQL, cosumindo dados do MongDB rodando através do Docker


## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/) 
- [GraphQL](https://graphql.org/) 
- [MongoDB](https://www.mongodb.com/) 
- [Docker](https://www.docker.com/) 

## Chamadas das Querys e Mutations

### Cadastro de usuário
```mutation {
  createUser(
    name:"Gustavo Larsen", 
    email: "guslarsen@gmail.com" ) 
  {
    id,
    name, 
    email
  }  
}
```
<img align="center" alt="cadastro-usuario" title="Cadastro de Usuário" src=".github/cadastro-usuario.png" width="600px" />

### Listagem de todos os usários
```
query {
  users {
    id,
    name, 
    email
  }
}
```
<img align="center" alt="listagem-usuarios" title="Listagem de Usuários" src=".github/lista-usuarios.png" width="600px" />

### Busca de usário por ID
```
query {
  user (id: "5e88e0149cfb033af0383f39") {
    name,
    email,
  }
} 
```

<img align="center" alt="usuario-por-id" title="Busca de Usuário por ID" src=".github/usuario-por-id.png" width="600px" />

## Autor
Gustavo Larsen [@gustavoslarsen](https://twitter.com/gustavoslarsen)

