import startGame from '../index.js';
import getRandomNumber from '../helpers/getRandomNumber.js';
import isPrime from '../helpers/isPrime.js';

const runPrimeRound = () => {
  const question = getRandomNumber(0, 1000);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const runPrime = () => {
  const mainQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(mainQuestion, runPrimeRound);
};

export default runPrime;
