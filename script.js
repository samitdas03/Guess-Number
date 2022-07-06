'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;
let win = false;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    if(score > 0 && !win) {
        if(!guess) {
            document.querySelector('.message').textContent = '⛔️ No Number!';
        } else if(guess === secretNumber) {
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.message').textContent = '🎉 Correct Number!';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            highScore = Math.max(highScore, score);
            document.querySelector('.highscore').textContent = highScore;
            win = true;
        } else {
            score--;
            document.querySelector('.score').textContent = score;
            if(score === 0) {
                document.querySelector('.message').textContent = '💥 You lost the game!'
            } else if(guess > secretNumber) {
                document.querySelector('.message').textContent = '📈 Too High!';
            } else {
                document.querySelector('.message').textContent = '📉 Too Low!';
            }
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    win = false;
    secretNumber = Math.trunc(Math.random()*20)+1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
});
