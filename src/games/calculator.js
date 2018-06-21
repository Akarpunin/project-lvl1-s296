import { cons } from 'hexlet-pairs';
import generateNumber from '../subfunctions';
import playGame from '..';

const minValue = 1;
const maxValue = 30;
const description = 'What is the result of the expression?';

const makeData = () => {
  const operand1 = generateNumber(minValue, maxValue);
  const operand2 = generateNumber(minValue, maxValue);
  const numberOfOperation = generateNumber(1, 3);
  let answer;
  let question;
  switch (numberOfOperation) {
    case 1:
      question = `${operand1} + ${operand2}`;
      answer = operand1 + operand2;
      break;
    case 2:
      question = `${operand1} - ${operand2}`;
      answer = operand1 - operand2;
      break;
    default:
      question = `${operand1} * ${operand2}`;
      answer = operand1 * operand2;
  }
  return cons(question, answer);
};

const gameCalc = () => playGame(description, makeData);

export default gameCalc;
