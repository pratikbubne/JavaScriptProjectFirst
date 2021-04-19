'use strict';

let guessInput = document.querySelector('.guess');
let score = document.querySelector('.score');
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let guessMessage = document.querySelector('h1');

let checkBtn = document.querySelector('.check');
let highScore = document.querySelector('.highscore');
let againBtn = document.querySelector('.again');
let bodyColor = document.querySelector('body');

let scores = {
    scoreValue:20,
    hScore:0
}


let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber)

function messageContent(msg) {
    message.textContent = msg

}


checkBtn.addEventListener('click', () => {

    if (Number(guessInput.value) <= 0 || Number(guessInput.value) > 20) {
        message.textContent = 'incorrect input';
        guessInput.value = ' ';
    }
    else if (randomNumber === Number(guessInput.value)) {
        messageContent('You Win...')
        number.textContent = randomNumber
        bodyColor.style.background = 'green'
        guessMessage.textContent = 'Correct Guess...'
        if(scores.scoreValue > scores.hScore){
            scores.hScore = scores.scoreValue;
            highScore.textContent = scores.hScore;
        }

    }
    else if (scores.scoreValue > 1) {
        randomNumber > Number(guessInput.value) ? messageContent('too low'): messageContent('too high')
        scores.scoreValue--;
        score.textContent = scores.scoreValue;

    }
    else {

        score.textContent = "Try again....";
        bodyColor.style.background = 'red'

    }

});

againBtn.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);
    score.textContent = 20;
    message.textContent = 'Start guessing...';
    number.textContent = '?';
    bodyColor.style.background = 'black';
    guessInput.value = ' ';
    guessMessage.textContent = 'Guess My Number!'
    scores.scoreValue=20
    
    
});