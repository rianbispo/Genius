let order = [];
let clickedOrder = [];
let score = 0;

// 0- Verde
// 1- Vermelho
// 2- Amarelo
// 3- Azul

const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');

//Cria ordem aleatória
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4); //Sorteia um número de 0 a 3
  order[order.length] = colorOrder;
  clickedOrder = [];
  
  for(let i in order){
    let elementColor = createColorElement(order[i]);
    ligthColor(elementColor, Number(i) + 1);
  }
}

//Acende a próxima cor
let ligthColor = (element, number) => {
  number = number * 500;
  setTimeout(()=>{
    element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  })
}

// Checa se a ordem clicada está correta
let checkOrder = () => {
  for(let i in clickedOrder){
    if(clickedOrder[i] != order[i]){ //caso dê erro colocar apenas !=
      lose();
      break;
    }
  }
  if(clickedOrder.length == order.length) {
    alert(`Pontuação ${score}\n Você acertou! Iniciando próximo nível!`);
    nextLevel();
  }
}

//Função para clique do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  },250);

}

//Função que retorna a cor
let createColorElement = (color) => {
  if(color == 0){
    return green;
  }else if(color == 1){
    return red;
  }else if(color == 2){
    return yellow;
  }else if(color == 3){
    return blue;
  }
}

//Função para próximo nível do jogo
let nextLevel = () => {
 score++;
 shuffleOrder();
}

//Função Para a perda de jogo
let lose = () => {
  alert(`Pontuação ${score}\n Game Over!\n Clique em OK para reiniciar!`);
  order = [];
  clickedOrder = [];

  playGame();
}

let playGame = () => {
  alert('Bem vindo ao Genius! Iniciando novo jogo...');
  score = 0;

  nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();