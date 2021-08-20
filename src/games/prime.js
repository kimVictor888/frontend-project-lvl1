import startGame from '../index.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const runRound = () => {
  const randomNumber = getRandomNumber(0, 1000);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return { question: randomNumber, correctAnswer };
};

const runPrime = () => {
  const mainQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(mainQuestion, runRound);
};

export default runPrime;
