// ---------------------------
// BASE DE CONTEÚDOS (somente ARRAYS)
// ---------------------------

const materias = ["matematica", "portugues", "biologia"];

const resumos = [
  "A matemática envolve álgebra, geometria, funções, estatística e trigonometria. É essencial dominar operações, equações e análise gráfica.",
  "Português envolve interpretação de texto, gramática, figuras de linguagem e redação. A leitura crítica é essencial em provas.",
  "Biologia estuda os seres vivos, genética, ecologia, células e evolução. É essencial para provas de ciências da natureza."
];

const questoes = [
  [
    "Resolva: 3x - 7 = 11. Qual o valor de x?",
    "Calcule a área de um círculo de raio 4 cm.",
    "Qual é o valor de f(3) na função f(x) = 2x² - 1?"
  ],
  [
    "Identifique a figura de linguagem: 'Ele tinha um coração de pedra'.",
    "Classifique o sujeito em: 'Abrem-se as cortinas'.",
    "Explique a diferença entre 'senão' e 'se não'."
  ],
  [
    "Explique o processo de fotossíntese.",
    "O que é seleção natural?",
    "Qual é a função dos lisossomos?"
  ]
];

const flashcards = [
  [
    ["O que é uma função?", "Uma relação que associa cada elemento do domínio a um único elemento da imagem."],
    ["Fórmula da área do triângulo", "(base × altura) ÷ 2"],
    ["O que é média aritmética?", "Soma dos valores dividida pela quantidade de termos."]
  ],
  [
    ["Metáfora", "Comparação implícita entre dois elementos."],
    ["Sujeito indeterminado", "Quando não se sabe ou não interessa saber quem pratica a ação."],
    ["Sinônimo", "Palavra que possui significado semelhante a outra."]
  ],
  [
    ["Mitocôndria", "Responsável pela produção de energia (ATP)."],
    ["DNA", "Molécula que contém informações genéticas."],
    ["Mutação", "Alteração no material genético."]
  ]
];


// ---------------------------
// FUNÇÕES
// ---------------------------

// Retorna o índice da matéria
function indiceMateria(materia) {
  return materias.indexOf(materia.toLowerCase());
}

// Gerar RESUMO
function gerarResumo(indice) {
  return resumos[indice];
}

// Gerar QUESTÃO aleatória
function gerarQuestao(indice) {
  const lista = questoes[indice];
  const escolha = Math.floor(Math.random() * lista.length);
  return lista[escolha];
}

// Gerar FLASHCARD aleatório
function gerarFlashcard(indice) {
  const lista = flashcards[indice];
  const escolha = Math.floor(Math.random() * lista.length);
  return `Flashcard:\nFrente: ${lista[escolha][0]}\nVerso: ${lista[escolha][1]}`;
}


// ---------------------------
// FUNÇÃO PRINCIPAL
// ---------------------------

function gerarConteudo(materia, tipo) {
  const index = indiceMateria(materia);

  if (index === -1) {
    return "Matéria não encontrada. Tente: matematica, portugues ou biologia.";
  }

  switch (tipo.toLowerCase()) {
    case "resumo":
      return gerarResumo(index);

    case "questoes":
      return gerarQuestao(index);

    case "flashcards":
      return gerarFlashcard(index);

    default:
      return "Tipo inválido! Use: resumo, questoes ou flashcards.";
  }
}




