const prompt = require("prompt-sync")()

function materialDeEstudo() {

  let estudar = prompt("Qual matéria você deseja estudar? ")

  // AQUI ESTÁ A ALTERAÇÃO QUE VOCÊ PEDIU ✔
  let tipo = prompt("O que deseja ver? (conteudos, explicacao, exemplos, atividades) ")

  let matematica = {

    conteudos: "maximo e minimo da funçao",

    explicacao: `
São pontos onde a função atinge um pico, mas apenas considerando a região próxima.

Máximo local → ponto mais alto em volta.
Mínimo local → ponto mais baixo em volta.

Máximo global → maior valor da função.
Mínimo global → menor valor da função.
`,

    exemplos: `
f(x)=−x²+4x+1
Vértice: x = 2 → Máximo = 5
`,

    atividades: `
Questões sobre máximo e mínimo.
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
    console.log("Tipo inválido! Use: conteudos, explicacao, exemplos ou atividades.")
    return
  }

  console.log("\n===== RESULTADO =====\n")
  console.log(materiaEscolhida[tipoEscolhido])
}

materialDeEstudo()
