import startGame from '../index.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const getProgressionList = (number) => {
  const result = [];
  let startNumber = getRandomNumber(0, 100);

  for (let i = 0; i < 10; i += 1) {
    result.push(startNumber);
    startNumber += number;
  }

  return result;
};

const runRound = () => {
  const progressionList = getProgressionList(getRandomNumber(5, 20));
  const hiddenNumberIndex = getRandomNumber(0, 10);
  const correctAnswer = progressionList[hiddenNumberIndex].toString();
  progressionList[hiddenNumberIndex] = '..';
  const question = progressionList.join(' ');
  return { question, correctAnswer };
};

const runProgression = () => {
  const mainQuestion = 'What number is missing in the progression?';
  startGame(mainQuestion, runRound);
};

export default runProgression;
