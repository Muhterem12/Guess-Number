'use strict';

console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = '54';
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // NO İNPUT
  if (!guess) {
    // document.querySelector('.message').textContent = '🚫 Not a Number!';
    displayMessage('🚫 Not a Number!');

    // WİN
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Setting Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // GUESS İS WRONG (AVOID REPEATING YOURSELF)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '🚫 Too high' : '🚫 Too low';
      displayMessage(guess > secretNumber ? '🚫 Too high' : '🚫 Too low');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You Lost!';
      displayMessage('💥 You Lost!');

      document.querySelector('.score').textContent = 0;
    }

    //  GUESS İS HIGH
    /*
  } else if (guess > secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = '🚫 Too high';
      displayMessage('🚫 Too high')

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You Lost';
      displayMessage('💥 You Lost')

      document.querySelector('.score').textContent = 0;
    }

    // GUESS İS LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = '🚫 Too low';
      displayMessage('🚫 Too low')

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You Lost!';
      displayMessage('💥 You Lost!')

      document.querySelector('.score').textContent = 0;
    }
    */
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // Value of an input is always a string
  document.querySelector('.guess').value = '';
});

// REFACTORING
