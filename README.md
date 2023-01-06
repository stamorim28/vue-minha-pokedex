# Projeto - Minha Pokedex

## Desenvolvido com Vue, SASS, Pinia e Axios

Link - https://minha-pokedex-vue.netlify.app/

Consumindo a <a href="https://pokeapi.co/" target="_blank">PokeAPI</a> e com imagens dos pokemons carregadas de forma dinâmica do <a href="https://www.pokemon.com/br/pokedex/" target="_blank">Site Oficial</a>, o projeto mostra todos os pokémons.

<img width="850" src="https://raw.githubusercontent.com/stamorim28/minha-pokedex/master/pictures/print_1.png" alt="print"/>

## Novas ferramentas e features 👓🍍

Houveram algumas atualizações no projeto que agora inclui o <a href="https://sass-lang.com/" target="_blank">SASS</a> no lugar do antigo CSS e também foi adicionado o <a href="https://pinia.vuejs.org/" target="_blank">Pinia</a> como gerenciador de estado do projeto atuando junto com o <a href="https://axios-http.com/ptbr/docs/intro" target="_blank">Axios</a>. O código foi refatorado e reorganizado.

Além do código também foi incluído uma modal exibindo os dados do pokémon, basta o usuário clicar em um dos cards que a modal exibirá os dados do pokémon referente.

<img width="850" src="https://raw.githubusercontent.com/stamorim28/minha-pokedex/master/pictures/print_2.png" alt="print"/>

Houve uma alteração em relação a paginação, que foi subistituído pelo estilo prev/next com foco na melhoria de desempenho e continua exibindo todos os pokémons.

<img width="850" src="https://raw.githubusercontent.com/stamorim28/minha-pokedex/master/pictures/print_3.png" alt="print"/>

## Ferramenta de busca por requisição 🔍

Foi implementado uma melhoria na busca por pokémons, anteriormente exibindo apenas os pokémons já carregados, agora se tem a possibilidade de buscas todos os pokémons sem necessidade de carregamento prévio.

<img src="https://raw.githubusercontent.com/stamorim28/minha-pokedex/master/pictures/print_4.png" alt="print"/>

Em caso de comparação sobre as modificações feitas a branch antiga é a <a href="https://github.com/stamorim28/minha-pokedex/tree/feature/v1.0.0">feature/v1.0.0</a>.

## Setup

```
npm install
```

## Server

```
npm run dev
```

_Este projeto vem sendo um laboratório e a cada conhecimento novo adiquirido ele é atualizado. Mais melhorias em breve._
