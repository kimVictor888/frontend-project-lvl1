import startGame from '../index.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const isEven = (number) => number % 2 === 0;

const runRound = () => {
  const question = getRandomNumber(0, 66);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const runEven = () => {
  const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(mainQuestion, runRound);
};

export default runEven;
