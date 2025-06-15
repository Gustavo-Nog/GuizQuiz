const bancoQuestoes = {
  programacao: [
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
    },
    {
      pergunta: "Qual das opções abaixo não representa um método da linguagem Java?",
      respostas: [
        { text: "System.out.println()", correct: false },
        { text: "toString()", correct: false },
        { text: "parseInt()", correct: false },
        { text: "appendChild()", correct: true },
      ]
    },
    {
      pergunta: "O que é um array?",
      respostas: [
        { text: "Uma estrutura de repetição", correct: false },
        { text: "Um algoritmo de ordenação", correct: false },
        { text: "Um tipo de dado que armazena múltiplos valores em uma variável só", correct: true },
        { text: "Um tipo de dado que armazena uma única informação", correct: false },
      ]
    },
    {
      pergunta: "Qual dessas linguagens é mais utilizada para estilizar páginas web?",
      respostas: [
        { text: "Python", correct: false },
        { text: "CSS", correct: true },
        { text: "Java", correct: false },
        { text: "HTML", correct: false },
      ]
    }
  ],

  cinema: [
    {
      pergunta: "Quem dirigiu o filme 'A Origem' (Inception)?",
      respostas: [
        { text: "Steven Spielberg", correct: false },
        { text: "Christopher Nolan", correct: true },
        { text: "James Cameron", correct: false },
        { text: "Quentin Tarantino", correct: false },
      ]
    },
    {
      pergunta: "Em que ano foi lançado o filme 'A Noviça Rebelde' ()? ",
      respostas: [
        { text: "1965", correct: true },
        { text: "1966", correct: false },
        { text: "1963", correct: false },
        { text: "1967", correct: false },
      ]
    },
    {
      pergunta: "Qual ator possui mais Oscars na categoria de Melhor Ator?",
      respostas: [
        { text: "Daniel Day-Lewis", correct: true },
        { text: "Al Pacino", correct: false },
        { text: "Robert De Niro", correct: false },
        { text: "Denzel Washington", correct: false },
      ]
    },
    {
      pergunta: "Qual filme ganhou o Oscar de Melhor Filme em 1994?",
      respostas: [
        { text: "Pulp Fiction", correct: false },
        { text: "Forrest Gump", correct: true },
        { text: "Um Sonho de Liberdade", correct: false },
        { text: "Quatro Casamentos e um Funeral", correct: false },
      ]
    },
    {
      pergunta: "Quem interpretou o Coringa em 'O Cavaleiro das Trevas'?",
      respostas: [
        { text: "Joaquin Phoenix", correct: false },
        { text: "Heath Ledger", correct: true },
        { text: "Jared Leto", correct: false },
        { text: "Jack Nicholson", correct: false },
      ]
    },
    {
      pergunta: "Qual desses filmes é uma animação da Pixar?",
      respostas: [
        { text: "Shrek", correct: false },
        { text: "Toy Story", correct: true },
        { text: "A Era do Gelo", correct: false },
        { text: "Madagascar", correct: false },
      ]
    },
    {
      pergunta: "Qual o primeiro ator negro a ganhar um Oscar?",
      respostas: [
        { text: "Denzel Washington", correct: false },
        { text: "Jamie Foxx", correct: false },
        { text: "Sidney Poitier", correct: true },
        { text: "Mahershala Ali", correct: false },
      ]
    }
  ],

  historia: [
    {
      pergunta: "Em que ano o Brasil proclamou sua independência?",
      respostas: [
        { text: "1808", correct: false },
        { text: "1822", correct: true },
        { text: "1889", correct: false },
        { text: "1500", correct: false },
      ]
    },
    {
      pergunta: "Quem foi o primeiro presidente do Brasil?",
      respostas: [
        { text: "Getúlio Vargas", correct: false },
        { text: "Juscelino Kubitschek", correct: false },
        { text: "Deodoro da Fonseca", correct: true },
        { text: "Pedro II", correct: false },
      ]
    },
    {
      pergunta: "Qual evento marcou o início da Segunda Guerra Mundial?",
      respostas: [
        { text: "Ataque a Pearl Harbor", correct: false },
        { text: "Invasão da Polônia pela Alemanha", correct: true },
        { text: "Batalha de Stalingrado", correct: false },
        { text: "Bombardeio de Hiroshima", correct: false },
      ]
    },
    {
      pergunta: "Quem foi o líder do movimento pela independência da Índia?",
      respostas: [
        { text: "Jawaharlal Nehru", correct: false },
        { text: "Mahatma Gandhi", correct: true },
        { text: "Nelson Mandela", correct: false },
        { text: "Subhas Chandra Bose", correct: false },
      ]
    },
    {
      pergunta: "Qual foi o período da ditadura militar no Brasil?",
      respostas: [
        { text: "1930-1945", correct: false },
        { text: "1964-1985", correct: true },
        { text: "1946-1964", correct: false },
        { text: "1985-1992", correct: false },
      ]
    },
    {
      pergunta: "Quem foi o imperador do Brasil durante o período imperial?",
      respostas: [
        { text: "Pedro I e Pedro II", correct: true },
        { text: "Getúlio Vargas", correct: false },
        { text: "Juscelino Kubitschek", correct: false },
        { text: "Tiradentes", correct: false },
      ]
    },
    {
      pergunta: "Qual o nome do tratado que encerrou a Primeira Guerra Mundial?",
      respostas: [
        { text: "Tratado de Versalhes", correct: true },
        { text: "Tratado de Tordesilhas", correct: false },
        { text: "Paz de Westfália", correct: false },
        { text: "Tratado de Utrecht", correct: false },
      ]
    },
    {
      pergunta: "Quem foi Winston Churchill?",
      respostas: [
        { text: "Primeiro-ministro do Reino Unido durante a Segunda Guerra Mundial", correct: true },
        { text: "Presidente dos EUA durante a Segunda Guerra Mundial", correct: false },
        { text: "Ditador da Alemanha", correct: false },
        { text: "General do exército soviético", correct: false },
      ]
    },
    {
      pergunta: "Quem foi a figura histórica conhecida como 'Pai da Aviação'?",
      respostas: [
        { text: "Santos Dumont", correct: true },
        { text: "Alberto Santos", correct: false },
        { text: "Wright Brothers", correct: false },
        { text: "Thomas Edison", correct: false },
      ]
    },
    {
      pergunta: "Qual foi o principal motivo da Revolução Francesa?",
      respostas: [
        { text: "Fim do feudalismo e busca por direitos iguais", correct: true },
        { text: "Independência da França da Inglaterra", correct: false },
        { text: "Início da Primeira Guerra Mundial", correct: false },
        { text: "Revolta contra Napoleão Bonaparte", correct: false },
      ]
    },
    {
      pergunta: "Quem foi Tiradentes no contexto da história brasileira?",
      respostas: [
        { text: "Um líder da Inconfidência Mineira", correct: true },
        { text: "O primeiro presidente do Brasil", correct: false },
        { text: "Imperador do Brasil", correct: false },
        { text: "Herói da Guerra do Paraguai", correct: false },
      ]
    }
  ]
}
