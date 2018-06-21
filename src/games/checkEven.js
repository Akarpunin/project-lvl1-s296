import { cons } from 'hexlet-pairs';
import generateNumber from '../subfunctions';
import playGame from '..';

const minValue = 1;
const maxValue = 99;
const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => (num % 2 === 0);

const makeData = () => {
  const question = generateNumber(minValue, maxValue);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const gameCheckEven = () => playGame(description, makeData);

export default gameCheckEven;
