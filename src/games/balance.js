import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import playGame from '..';

const minValue = 10;
const maxValue = 9999;
const description = 'Balance the given number.';

const sumOfDigits = (num) => {
  const digitsCount = String(num).length;
  let sum = 0;
  for (let i = 0; i < digitsCount; i += 1) {
    sum += Number(String(num)[i]);
  }
  return sum;
};

const balanceNumber = (num) => {
  const digitsCount = String(num).length;
  const remainder = sumOfDigits(num) % digitsCount;
  const quotient = Math.floor(sumOfDigits(num) / digitsCount);
  let result = '';
  for (let i = 0; i < digitsCount; i += 1) {
    if (i < digitsCount - remainder) result = `${result}${quotient}`;
    else result = `${result}${quotient + 1}`;
  }
  return result;
};

const makeData = () => {
  const question = generateNumber(minValue, maxValue);
  const answer = balanceNumber(question);
  return cons(question, answer);
};

const gameBalance = () => playGame(description, makeData);

export default gameBalance;
