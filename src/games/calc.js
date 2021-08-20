import startGame from '../index.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const calculate = (firstNumber, secondNumber, randomOperator) => {
  switch (randomOperator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return null;
  }
};

const runRound = () => {
  const operations = ['+', '-', '*'];
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);
  const randomOperator = operations[getRandomNumber(0, operations.length)];
  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const correctAnswer = calculate(firstNumber, secondNumber, randomOperator).toString();

  return { question, correctAnswer };
};

const runCalc = () => {
  const mainQuestion = 'What is the result of the expression?';
  startGame(mainQuestion, runRound);
};

export default runCalc;
