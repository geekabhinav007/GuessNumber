'use strict';
let secretNumber = Math.trunc(Math.random() * 100) + 1;
/**/
let score = 10;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess - secretNumber > 40 && guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😔 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (
    guess - secretNumber <= 40 &&
    guess - secretNumber > 10 &&
    guess > secretNumber
  ) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😔 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess - secretNumber <= 10 && guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Slightly high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😔 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (secretNumber - guess > 40 && secretNumber > guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😔 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (
    secretNumber - guess <= 40 &&
    secretNumber - guess > 10 &&
    secretNumber > guess
  ) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😔 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (secretNumber - guess <= 10 && secretNumber > guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Slightly Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😔 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
