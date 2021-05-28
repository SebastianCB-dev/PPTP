'use strict';
const options = ['Piedra','Papel','Tijera'];
const divOptions = document.querySelector('.options');
const textOptions = document.querySelector('.text-Options');
const imgPlayer = document.querySelector('#Selection-player');
const imgMachine = document.querySelector('#Selection-Machine');
const buttonReset = document.querySelector('#reset');
const divGameResult = document.querySelector('.Game-result');
const statusGame = document.querySelector('#status-game');
const empate = () => {
    let texto = 'Empate!';
    statusGame.innerHTML = texto;
    statusGame.classList.add('empate');
}
const ganaste = () => {
    let texto = 'Ganaste!';
    statusGame.innerHTML = texto;
    statusGame.classList.add('ganaste');
}
const perdiste = () => {
    let texto = 'Perdiste!';
    statusGame.innerHTML = texto;
    statusGame.classList.add('perdiste');
}
const playGame = (option) => {
    divOptions.style.display = 'none';
    textOptions.style.display = 'none';
    let maquinaNroRandom = parseInt(Math.random() * 3);
    let urlMaquina = `assets/imgs/${options[maquinaNroRandom]}.png`;
    let urlPlayer = `assets/imgs/${option}.png`;
    divGameResult.style.display = 'block';
    imgPlayer.setAttribute('src', urlPlayer);
    imgMachine.setAttribute('src', urlMaquina);
    if(option == options[maquinaNroRandom]) {
        empate();
    }
    else if(option == 'Papel' && options[maquinaNroRandom] == 'Tijera' || option == 'Piedra' && options[maquinaNroRandom] == 'Papel' || option == 'Tijera' && options[maquinaNroRandom] == 'Piedra')  {
        perdiste();
    }
    else if(option == 'Tijera' && options[maquinaNroRandom] == 'Papel' || option == 'Papel' && options[maquinaNroRandom] == 'Piedra' || option == 'Piedra' && options[maquinaNroRandom] == 'Tijera') {
        ganaste();
    }
};
buttonReset.addEventListener('click', ()=>{
    window.open('index.html','_self');
});