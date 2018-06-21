import { cons } from 'hexlet-pairs';
import generateNumber from '../subfunctions';
import playGame from '..';

const minValue = 1;
const maxValue = 99;
const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  const smallestNum = (num1 <= num2) ? num1 : num2;
  for (let i = smallestNum; i >= 1; i -= 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) return i;
  }
  return 1;
};

const makeData = () => {
  const number1 = generateNumber(minValue, maxValue);
  const number2 = generateNumber(minValue, maxValue);
  const question = `${number1} ${number2}`;
  const answer = findGCD(number1, number2);
  return cons(question, answer);
};

const gameGCD = () => playGame(description, makeData);

export default gameGCD;
