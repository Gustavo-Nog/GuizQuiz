const questoes = [
  {
    pergunta: "Qual a primeira linguagem de baixo nível legível para humanos?",
    respostas: [
      { text: "Fortran", correct: false },
      { text: "Assembly", correct: true },
      { text: "COBOL", correct: false },
      { text: " C++", correct: false },
    ]
  },
  {
    pergunta: "Selecione a opção que contém apenas linguagens de baixo nível:",
    respostas: [
      { text: "Assembly, Java e C#", correct: false },
      { text: "Java, Rust e Python", correct: false },
      { text: "C++, Fortran e Python", correct: false },
      { text: " Fortran, C e Assembly", correct: true },
    ]
  },
  {
    pergunta: "Quem criou a linguagem Python?",
    respostas: [
      { text: "Dennis Ritchie", correct: false },
      { text: "Grace Hopper", correct: false },
      { text: "James Gosling", correct: false },
      { text: "Guido van Rossum", correct: true },
    ]
  },
  {
    pergunta: "Qual o nome do primeiro programador da história?",
    respostas: [
      { text: "Konrad Zuse", correct: false },
      { text: "Claude Shannon", correct: false },
      { text: "Ada Lovelace", correct: true },
      { text: "Grace Hoppe", correct: false },
    ]
  },
  {
    pergunta: "Em que ano foi criada a linguagem de programação brasileira Lua",
    respostas: [
      { text: "1993", correct: true },
      { text: "1987", correct: false },
      { text: "1990", correct: false },
      { text: "1986", correct: false },
    ]
  }
];

let nome = "";
let questaoAtual = 0;
let pontuacao = 0;
let tempoRestante = 7;
let intervaloTempo;
let temposDeResposta = [];

const telaNome = document.getElementById("tela-nome");
const telaQuiz = document.getElementById("tela-quiz");
const telaResultado = document.getElementById("tela-resultado");

const form = document.querySelector(".formulario");
const inputNome = document.getElementById("nome");
const questaoTexto = document.querySelector(".questao");
const botoesResposta = document.querySelectorAll(".botoes-resposta  .botao");
const tempo = document.querySelector(".tempo");
const textoResultado = document.getElementById("texto-resultado");
const botaoReiniciar = document.getElementById("btn-reiniciar");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  nome = inputNome.value.trim();

  if (nome) {
    trocarTela("tela-quiz");
    iniciarQuiz();
  }
});

function trocarTela(telaId) {
  document.querySelectorAll(".tela").forEach(tela => tela.classList.remove("ativa"));
  document.getElementById(telaId).classList.add("ativa");
}

function iniciarQuiz() {
  mostrarQuestao();
  comecarTempo();

  botoesResposta.forEach(button => {
    button.addEventListener("click", respostaSelecionada);
  });

}

function mostrarQuestao() {
  limparBotoes();

  const questao = questoes[questaoAtual];
  questaoTexto.textContent = questao.pergunta;

  questao.respostas.forEach((resposta, i) => {
    const botao = botoesResposta[i];
    botao.textContent = resposta.text;
    botao.dataset.correct = resposta.correct;
    botao.disabled = false;
    botao.onclick = selecionarResposta;
  });

  comecarTempo();
}

function comecarTempo() {
  tempoRestante = 7;
  tempo.textContent = `Tempo Restante: ${tempoRestante}s`;
  clearInterval(intervaloTempo);

  intervaloTempo = setInterval(() => {
    tempoRestante--;
    tempo.textContent = `Tempo Restante: ${tempoRestante}s`;

    if (tempoRestante === 0) {
      clearInterval(intervaloTempo);
      mostrarRespostaCorreta();
      setTimeout(proximaQuestao, 2000);
    }
  }, 1000);
}

function selecionarResposta(e) {
  clearInterval(intervaloTempo);
  const botao = e.target;
  const correto = botao.dataset.correct === "true";

  const tempoGasto = 7 - tempoRestante;
  temposDeResposta.push(tempoGasto);

  if (correto) {
    botao.classList.add("correct");
    pontuacao++;
  } else {
    botao.classList.add("incorrect");
    mostrarRespostaCorreta();
  }

  botoesResposta.forEach(b => b.disabled = true);
  setTimeout(proximaQuestao, 2000);
}

function mostrarRespostaCorreta() {
  botoesResposta.forEach(botao => {
    if (botao.dataset.correct === "true") {
      botao.classList.add("correct");
    }
    botao.disabled = true;
  });
}

function limparBotoes() {
  botoesResposta.forEach(botao => {
    botao.classList.remove("correct", "incorrect");
    botao.textContent = "";
    botao.disabled = false;
  });
}

function proximaQuestao() {
  questaoAtual++;
  if (questaoAtual < questoes.length) {
    mostrarQuestao();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  trocarTela("tela-resultado");

  const totalTempo = temposDeResposta.reduce((a, b) => a + b, 0);
  const mediaTempo = (totalTempo / temposDeResposta.length).toFixed(2);

  textoResultado.innerHTML = `
    ${nome}, você acertou ${pontuacao} de ${questoes.length} questões.<br>
    ${pontuacao >= questoes.length / 2 ? "Parabéns!" : "Você pode melhorar!"}
    Tempo médio de resposta: <strong>${mediaTempo} segundos</strong>
    `;
}

botaoReiniciar.addEventListener("click", () => {
  questaoAtual = 0;
  pontuacao = 0;
  temposDeResposta = [];
  trocarTela("tela-quiz");
  iniciarQuiz();
});

