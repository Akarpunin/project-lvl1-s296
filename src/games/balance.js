import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import playGame from '..';

const minValue = 10;
const maxValue = 9999;
const description = 'Balance the given number.';

const sumOfDigits = (num) => {
  let sum = 0;
  for (let i = 0; i < num.length; i += 1) {
    sum += Number(num[i]);
  }
  return sum;
};

const balanceNumber = (num) => {
  const remainder = sumOfDigits(num) % num.length;
  const resOfDiv = Math.floor(sumOfDigits(num) / num.length);
  let result = '';
  for (let i = 0; i < num.length; i += 1) {
    if (i < num.length - remainder) result = `${result}${String(resOfDiv)}`;
    else result = `${result}${String(resOfDiv + 1)}`;
  }
  return result;
};

const makeData = () => {
  const question = generateNumber(minValue, maxValue);
  const answer = balanceNumber(String(question));
  return cons(question, answer);
};

const gameBalance = () => playGame(description, makeData);

export default gameBalance;
