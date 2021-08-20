#!/usr/bin/env node
import readlineSync from 'readline-sync';

let correctAnswers = 0;
let gameOver = false;

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (correctAnswers < 3 && !gameOver) {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if ((randomNumber % 2 === 0 && userAnswer === 'yes') || (randomNumber % 2 !== 0 && userAnswer === 'no')) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
    console.log(`Let's try again, ${userName}!`);
    gameOver = true;
  }
}

if (!gameOver) {
  console.log(`Congratulations, ${userName}!`);
}
