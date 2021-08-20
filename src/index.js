import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const startGame = (exerciseText, runRound) => {
  const needCorrectAnswersCount = 3;
  const userName = greetUser();
  console.log(exerciseText);

  for (let i = 0; i < needCorrectAnswersCount; i += 1) {
    const { question, correctAnswer } = runRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
