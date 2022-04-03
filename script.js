'use strict';

function isNum(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}
function startGame(randomNumber) {
    randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
    return function repeat() {
        let userNumber = prompt('Число?');
        if (isNum(userNumber)) {
            if (userNumber > randomNumber) {
                alert("Загаданное число меньше");
            } else if (userNumber < randomNumber) {
                alert("Загаданное число больше");
            } else {
                alert("Поздравляю, Вы угадали!!!");
            }
        } else {
            alert("Введи число!");
        }
    };


}
startGame()();




