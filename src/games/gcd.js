import startGame from '../index.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const getGcd = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return getGcd(secondNumber, firstNumber % secondNumber).toString();
};

const runRound = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGcd(firstNumber, secondNumber);
  return { question, correctAnswer };
};

const runGcd = () => {
  const mainQuestion = 'Find the greatest common divisor of given numbers.';
  startGame(mainQuestion, runRound);
};

export default runGcd;
