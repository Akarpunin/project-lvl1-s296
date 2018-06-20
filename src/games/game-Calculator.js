import { cons } from 'hexlet-pairs';
import generateNumber from '../generateNumber';

const minValue = 1;
const maxValue = 30;

const playGameCalculator = () => {
  const firstQuestion = 'What is the result of the expression?';
  const generateQuestion = () => {
    const operand1 = generateNumber(minValue, maxValue);
    const operand2 = generateNumber(minValue, maxValue);
    const numberOfOperation = generateNumber(1, 3);
    let correctAnswer = 0;
    let symbolOfOperation = '+';
    if (numberOfOperation === 1) {
      correctAnswer = operand1 + operand2;
      symbolOfOperation = '+';
    } else if (numberOfOperation === 2) {
      correctAnswer = operand1 - operand2;
      symbolOfOperation = '-';
    } else {
      correctAnswer = operand1 * operand2;
      symbolOfOperation = '*';
    }
    const secondQuestion = `Question: ${operand1} ${symbolOfOperation} ${operand2}`;
    return cons(secondQuestion, correctAnswer);
  };
  return cons(firstQuestion, generateQuestion);
};

export default playGameCalculator;
