const prompt = require("prompt-sync")()

let estudar = prompt("Qual matéria você deseja estudar?")
let tipo = prompt("O que deseja ver? (conteudo, exemplos, atividades)")


let matematica = {
  conteudos: `
"maximo e minimo da funçao"

-- Máximos e mínimos LOCAIS --
São pontos onde a função atinge um pico (ou vale) apenas na vizinhança.

Máximo local:
- É um topo.
- Mesmo que existam picos maiores, aquele é o maior da região.

Mínimo local:
- É um vale.
- Mesmo que existam vales mais baixos, aquele é o menor da região.

-- Máximo e mínimo GLOBAIS --
São os valores mais alto e mais baixo de TODO o gráfico.
`,
  exemplos: `
  
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

Exemplo:

f(x) = -x² + 4x + 1

xv = b / (2a)
yv = Δ / (4a)

Máximo no ponto (2, 5).
`,
  atividade: `
Questão 1 — Básica (Parábola)

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


let portugues = { conteudos: ``, exemplos: ``, atividade: ``, }
let biologia = { conteudos:``,  exemplos: ``, atividade: ``, }


let materias = {
  matematica,
  portugues,
  biologia,
}

function gerarConteudo(materia) {
 
    if (!materias[materia]) {
    return "Matéria não encontrada. Tente: matematica, portugues ou biologia."
  }

  let obj = materias[materia]

  switch (tipo.toLowerCase()) {
    case "conteudo":
      return obj.conteudos
    case "exemplos":
      return obj.exemplos
    case "atividades":
      return obj.atividade
    default:
      return "Tipo inválido! Use: conteudo, exemplos ou atividades."
  }
}

alert(gerarConteudo(estudar.toLowerCase()))