const perguntasDragonBall = [
  {
    pergunta: "Quem é o protagonista principal de Dragon Ball?",
    respostas: [
      "Vegeta",
      "Goku",
      "Piccolo"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome da técnica de assinatura de Goku que ele usa para derrotar Freeza na saga Namekusei?",
    respostas: [
      "Kamehameha",
      "Spirit Bomb",
      "Kaio-Ken"
    ],
    correta: 2
  },
  {
    pergunta: "Quem é o príncipe da raça Saiyajin?",
    respostas: [
      "Goku",
      "Vegeta",
      "Raditz"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do planeta natal dos Saiyajins?",
    respostas: [
      "Namekusei",
      "Terra",
      "Vegeta"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do pai de Goku?",
    respostas: [
      "Vegeta",
      "Bardock",
      "Raditz"
    ],
    correta: 1
  },
  {
    pergunta: "Quem é o arqui-inimigo de Goku na série Dragon Ball Z?",
    respostas: [
      "Cell",
      "Freeza",
      "Majin Buu"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome da fusão entre Goku e Vegeta?",
    respostas: [
      "Gogeta",
      "Gotenks",
      "Vegetto"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do ataque de assinatura de Vegeta?",
    respostas: [
      "Final Flash",
      "Galick Gun",
      "Big Bang Attack"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do animal de estimação de Goku?",
    respostas: [
      "Shenlong",
      "Porunga",
      "Kuririn"
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o primeiro vilão principal que Goku enfrenta em Dragon Ball Z?",
    respostas: [
      "Freeza",
      "Raditz",
      "Cell"
    ],
    correta: 1
  }
];

  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostratTotal = document.querySelector('#acertos span')
  mostratTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição 
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    quizItem.querySelector('dl').appendChild(dt)
    dt.querySelector('input').onchange =  (event) => {
      const estaCorreta = event.target.value == item.correta //true 
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostratTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      
    
    } 
  
  
  
  
  }
  
  quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }