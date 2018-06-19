import readlineSync from 'readline-sync';

const randomInt = (min, max) => {
  const rand = (min - 0.5) + (Math.random() * (max - (min + 1)));
  return Math.round(rand);
};

const isEval = (num) => {
  if (num % 2 === 0) return true;
  return false;
};

const playGameCheckEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('');
  const minValue = 1;
  const maxValue = 99;
  for (let i = 1; i <= 3; i += 1) {
    const num = randomInt(minValue, maxValue);
    const correctAnswer = (isEval(num) === true) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const answerByUser = readlineSync.question('Your answer: ');
    if (((answerByUser === 'yes') && (isEval(num) === true)) || ((answerByUser === 'no') && (isEval(num) === false))) {
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

export default playGameCheckEven;
