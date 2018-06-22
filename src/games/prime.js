import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import playGame from '..';

const minValue = 1;
const maxValue = 99;
const description = 'Is this number prime?';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const makeData = () => {
  const question = generateNumber(minValue, maxValue);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const gamePrime = () => playGame(description, makeData);

export default gamePrime;
