import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundsCount = 3;

const getQuestion = data => car(data);
const getCorrectAnswer = data => cdr(data);

const playGame = (description, getData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('');
  for (let i = 1; i <= roundsCount; i += 1) {
    const dataOfGame = getData();
    const question = getQuestion(dataOfGame);
    const correctAnswer = getCorrectAnswer(dataOfGame);
    console.log(`Question: ${question}`);
    const answerByUser = readlineSync.question('Your answer: ');
    if (String(answerByUser) === String(correctAnswer)) {
      console.log('Correct!');
      console.log('');
    } else {
      console.log(`'${answerByUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      console.log('');
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
  console.log('');
};

export default playGame;
