 'use strict';


 const guessNumberGame = function () {

   const hiddenNumber = Math.floor(Math.random() * 100) + 1;

   const checkNumber = function () {

     const userGuess = prompt('Угадай число от 1 до 100');

     if (userGuess === null) {
       alert('Игра окончена');
       return;
     }


     const userNumber = parseInt(userGuess, 10);

     if (!Number.isInteger(userNumber)) {
       alert('Введи число!');
       checkNumber();
     } else if (userNumber > hiddenNumber) {
       alert('Загаданное число меньше');
       checkNumber();
     } else if (userNumber < hiddenNumber) {
       alert('Загаданное число больше');
       checkNumber();
     } else {
       alert('Поздравляю, Вы угадали!!!');
     }
   }

   checkNumber();
 }

 guessNumberGame();