let nome = "";
let temaSelecionado = "";
let questoesSorteadas = [];
let questaoAtual = 0;
let pontuacao = 0;
let tempoRestante = 10;
let intervaloTempo;
let temposRespostas = [];


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
  temaSelecionado = document.getElementById("tema").value;

  if (nome && temaSelecionado) {
    prepararQuestoes();
    trocarTela("tela-quiz");
    iniciarQuiz();
  }
});

function prepararQuestoes() {
  const todas = [...bancoQuestoes[temaSelecionado]];
  // Embaralha
  todas.sort(() => 0.5 - Math.random());
  // Pega só as 7 primeiras
  questoesSorteadas = todas.slice(0, 7);
}

function trocarTela(telaId) {
  document.querySelectorAll(".tela").forEach(tela => tela.classList.remove("ativa"));
  document.getElementById(telaId).classList.add("ativa");
}

function iniciarQuiz() {
  mostrarQuestao();
}

function mostrarQuestao() {
  limparBotoes();

  const questao = questoesSorteadas[questaoAtual];;
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
  tempoRestante = 10;
  tempo.textContent = `Tempo Restante: ${tempoRestante}s`;
  clearInterval(intervaloTempo);

  intervaloTempo = setInterval(() => {
    tempoRestante--;
    tempo.textContent = `Tempo Restante: ${tempoRestante}s`;

    if (tempoRestante <= 0) {
      clearInterval(intervaloTempo);
      tempo.textContent = `Tempo Restante: 0s`;
      temposRespostas.push(10); // tempo máximo
      mostrarRespostaCorreta();
      setTimeout(proximaQuestao, 2000);
    }
  }, 1000);
}

function selecionarResposta(e) {
  clearInterval(intervaloTempo);
  const botao = e.target;
  const correto = botao.dataset.correct === "true";

  temposRespostas.push(10 - tempoRestante); // tempo usado

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
  if (questaoAtual < questoesSorteadas.length) {
    mostrarQuestao();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  trocarTela("tela-resultado");

  const tempoTotal = temposRespostas.reduce((acc, t) => acc + t, 0);
  const tempoMedio = (tempoTotal / temposRespostas.length).toFixed(2);

  textoResultado.innerHTML = `
    ${nome}, você acertou ${pontuacao} de ${questoesSorteadas.length} questões.<br>
    Tempo médio de resposta: ${tempoMedio}s<br>
    ${pontuacao >= questoesSorteadas.length / 2 ? "Parabéns!" : "Você pode melhorar!"}
  `;
}

botaoReiniciar.addEventListener("click", () => {
  temaSelecionado = "";
  questoesSorteadas = [];
  questaoAtual = 0;
  pontuacao = 0;
  temposRespostas = [];

  // Limpa campo de nome e tema
  document.getElementById("tema").selectedIndex = 0;

  // Volta para a tela de nome/tema
  trocarTela("tela-nome");
});

