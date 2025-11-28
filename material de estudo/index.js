const prompt = require("prompt-sync")()

function materialDeEstudo() {

  let estudar = prompt("Qual matéria você deseja estudar?")

  let tipo = prompt("O que deseja ver? (conteudo, exemplos, atividades)")

  

  let matematica = {

conteudos: "maximo e minimo da funçao",

explicaçao:`
São pontos onde a função atinge um pico, mas apenas considerando a região próxima.

 local Máximo
-É o pico da função.
-Imagine um morro:
-O topo é o máximo do local — pode haver montanhas maiores longe dali.

local Mínimo 
-É um vale da função.
-Imagine uma depressão no terreno:
-Mesmo que não seja o ponto mais baixo do mundo, é o mais baixo naquela região.

Em resumo:
-Máximo local → ponto mais alto em volta.
-Mínimo local → ponto mais baixo em volta.

2. Máximo e mínimo GLOBAL (ou absoluto)
-São os pontos absolutamente mais alto e mais baixo de toda a função dentro do intervalo analisado.
-No gráfico inteiro, sem olhar só a vizinhança.
       
        Máximo global → maior valor da função.            Mínimo global → menor valor da função.
`,

exemplos:
`
   |
   |       •  (mínimo)
   |     /
   |   /
   | /
---•-----------------
  x=2

ex1:
 f(x)=−x2+4x+1

formula:
Xv=b/2a
Yv=(delta)/4a

Máximo = 5 (no x = 2):
       *
     *   *
   *       *
--*---------*-----
      x=2

`,

atividade:`Questão 1 — Básica (Parábola)

Dada a função:
f(x)=−2x²+8x+3

a) A parábola abre para cima ou para baixo?
b) Essa função tem máximo ou mínimo?
c) Calcule o valor de x no vértice.
d) Determine o valor máximo (ou mínimo).

Questão 2 — Máximo e mínimo locais (Função cúbica)

Considere a função:
f(x)=x³−3x²−9x+5
a) Calcule os pontos críticos (onde 
f′(x)=0).
b) Use a segunda derivada para determinar quais pontos são máximo e mínimo locais.
c) Determine o valor do máximo e do mínimo locais.


Questão 3 — Análise gráfica (conceitual)

Observe o gráfico abaixo (representação textual):

         *
       *   *
     *       *
----*---*-------*-----
    A   B       C


Sabendo que:

Em A a curva sobe e depois desce
Em B a curva desce e depois sobe
Em C a curva atinge o ponto mais alto do gráfico

Responda:

a) Qual ponto é um máximo local?
b) Qual ponto é um mínimo local?
c) Qual ponto é o máximo global?

`
  }
  let portugues = {
    conteudos: "Conteúdos de português...",
    explicacao: "Explicação...",
    exemplos: "Exemplos...",
    atividades: "Atividades..."
  }

  let biologia = {
    conteudos: "Conteúdos de biologia...",
    explicacao: "Explicação...",
    exemplos: "Exemplos...",
    atividades: "Atividades..."
  }

  let materias = {
    matematica,
    portugues,
    biologia
  }

let materiaEscolhida = materias[estudar]
if (!materiaEscolhida) {
  console.log("Matéria não encontrada. Tente: matematica, portugues ou biologia.")
  return
}

let tipoEscolhido = tipo

if (!materiaEscolhida[tipoEscolhido]) {
  console.log("Tipo inválido! Use: conteudo, explicacao, exemplos ou atividades.")
  return
}

console.log("\n===== RESULTADO =====\n")
console.log(materiaEscolhida[tipoEscolhido])
}

materialDeEstudo()
