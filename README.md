<h2 align="center">
    <b>:fire: Be The Hero :fire:</b> 
</h2>

<p align="center">
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>
  <a>
  <img alt="Language" src="https://img.shields.io/badge/language-NodeJS-brightgreen">
  <img alt="Language" src="https://img.shields.io/badge/language-ReactJS-brightgreen">
  <img alt="Language" src="https://img.shields.io/badge/language-React Native-brightgreen">

</p>


## :bookmark: Sobre

O <strong>Be-The-Hero</strong> é uma aplicação Web e Mobile para ajudar ONG's a encontrarem doadores feita atravez da Next Level Week, administrada pela RockeatSeat.

<a id="documentacao"></a>

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [Node.js](https://nodejs.org/en/)
    - [Knex](http://knexjs.org)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
    - [Expo](https://docs.expo.io)

<a id="como-usar"></a>

## :fire: Como usar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** no mínimo na versão 12.0 instalado na máquina
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - Por fim, é **essencial** ter o **[Expo](https://expo.io/)** instalado de forma global na máquina

1. Faça um clone :

```sh
  $ git clone https://github.com/CharlesLB/ecoleta.git
```

2. Para executar:

```sh
  # Instale as dependências
  $ npm install

  ## Crie o banco de dados
  $ cd server
  $ npm run knex:migrate
  $ npm run knex:seed

  # Inicie a API
  $ npm run dev

  # Inicie a aplicação web
  $ cd web
  $ npm start

  # Inicie a aplicação mobile
  $ cd mobile
  $ npm start
```

<a id="como-contribuir"></a>

## :recycle: Como contribuir

- Faça um Fork desse repositório,
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`

## :memo: License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
