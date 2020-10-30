<template>
  <v-app id="app">
    <v-content>
      <v-container>
        <center><h1>MERCADOU - SUPER ESTAGIÁRIO - DEV</h1></center>
        <v-expansion-panels v-model="panel" multiple>
          <!-- Introdução -->
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h3>Introdução</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p class="text-justify">
                Seja bem vindo futuro super estagiário a nave Mercadou. Nós da
                equipe de Desenvolvimento e Tecnologia somos fãs de star wars
                <s>(50% da equipe é)</s> e achamos uma API muito maneira para
                desafiar os novos estagiários.
                <a href="https://swapi.dev/" target="_blank"
                  ><b>STAR WARS API (SWAPI)</b></a
                >, é uma api que contém informações do universo da franquia SW,
                e queremos fazer um desafio com base nos dados da SWAPI. Para
                não deixar vocês perdidos, nós do time de tech estamos montando
                um pequeno tutorial de como consumir a api usando
                <b>NODEJS.</b>
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!-- Tutorial -->
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h3>Tutorial</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>
                Pois bem, antes de entrar na descrição do desafio vamos explicar
                algumas conceitos de API REST e como consumi-las. Se você já
                conhece esses tópicos, não precisa ler essa descrição pois vai
                ser bem básica, já pode partir pro desafio.
              </p>
              <p class="text-justify">
                <b>Representational State Transfer</b>, em português
                <b>Transferência Representacional de Estado</b>, é um estilo de
                arquitetura de software que define um conjunto de recursos a
                serem usadas para a criação de aplicações. Resumidamente, o REST
                permite a criação de um projeto com interfaces bem definidas.
                Desta forma, permitindo, por exemplo, que aplicações se
                comuniquem. Grandes empresas como Google, Twitter, Facebook,
                Instagram usam esse conceito de API.
                <a
                  href=" https://becode.com.br/o-que-e-api-rest-e-restful/ "
                  target="_blank"
                  >LEIA MAIS</a
                >
              </p>
              <p class="text-justify">
                Para isso, vamos usar o modulo
                <a href=" https://github.com/axios/axios" target="_blank"
                  >axios</a
                >
                do Javascript, esse carinha é responsável por fazer requisições
                HTTP/HTTPS como GET/POST, no caso dessa api, só vamos usar o
                método GET do <b>axios</b>.
              </p>
              <p>
                Logo abaixo tem um exemplo de consulta na api, no método
                "getLukeSkywalker"
              </p>
              <center>
                <v-btn @click="getLukeSkywalker" color="orange" text>
                  getLukeSkywalker
                </v-btn>
              </center>
              <v-expand-transition>
                <v-card v-show="expand" class="mx-auto">
                  <h3 class="found">{{ Luke.name }} foi encontrado</h3>
                </v-card>
              </v-expand-transition>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!-- Desafio -->
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h3>Desafio</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p class="text-justify">
                George Lucas procurou uma start-up carioca para fazer um projeto
                relacionado à franquia de seus filmes. Ele pediu uma aplicação
                web, onde possa ver um catálogo dos filmes disponíveis na SWAPI
                (https://swapi.dev). Ele quer visualizar os filmes presentes na
                api (<i>https://swapi.dev/api/films/ID_DO_FILME/)</i>, onde cada
                filme tem que ter <b>pelo menos</b>, as seguintes informações
                exibidas: Nome do filme, nome do diretor, nome do
                produtor,numero do filme e a data de lançamento. Dentro da lista
                de filme, George também pediu uma lista dos personagens que
                aparecem em cada filme (<i
                  >DICA: array characters tem o end point de cada personagem
                  ;D</i
                >). Essa lista de personagem, tem que ter <b>pelo menos</b> os
                seguintes dados dos personagens: Nome do personagem,altura,
                massa, cor do cabelo,cor da pele, cor dos olhos,data de
                nascimento, e genero.
              </p>
              <li>
                - Você deve montar uma pagina web para mostrar o resultado do
                desafio, você está livre pra usar a criatividade de como vai
                resolver o problema seguindo as instruções.
              </li>
              <li>
                - Você tem que usar um framework front-end do javascript para
                realizar esse desafio.
              </li>
              <li>
                - O código deve está comentado, explicado seus passos em cada
                etapa;
              </li>
              <li>
                - Você pode consumir qualquer outro recurso, seja uma api ou
                montar uma pasta utils, qualquer coisa que vá ajudar na sua
                criatividade e elaboração do projeto.
              </li>
              <li>
                - O código deve ser enviado para o email:
                <b>tecnologia@mercadou.com.br</b> contendo o link do repositório
                do projeto. Para evitar cola, seguerimos que você coloque o nome
                do seu repositório usando a codificação vogal por numero.
                Exemplo: Meu nome é Gustavo Garcia, meu repositório vai ficar:
                <b>Gust4v0G4rci4</b>
              </li>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-content>
    <!-- Componete de Laoding FullScreen -->
    <loading :loading="loading" />
  </v-app>
</template>
<script>
import { getPeople } from "@/services";
import loading from "@/components/loading.vue";
export default {
  components: { loading },
  data: () => ({
    Luke: {},
    expand: false,
    panel: [0, 1, 2],
    loading: false
  }),
  created() {
    // Deixar o tema no modo escuro
    this.$vuetify.theme.dark = true;
  },
  methods: {
    async getLukeSkywalker() {
      // essa variável loading serve para controlar a tela de loading, true ligada, false desligada
      this.loading = true;
      let luke = await getPeople(1); // vamos passar o id do Luke da api
      this.Luke = luke; // vamos atribuir o dado do personagem na variavel do template
      this.loading = false;
      // expand controla o componete do vuetify, framework visual, que esconde conteudo.
      this.expand = true;
    }
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
html,
h1,
h3 {
  color: orange;
}
.found {
  padding: 15px;
}
b {
  color: orange;
}
body {
  color: white;
  margin: 0;
  overflow-x: hidden;
  max-width: 100vw;
  min-height: 100vh;
  background-color: #212121;
  font-family: "Roboto", sans-serif;
}
</style>
