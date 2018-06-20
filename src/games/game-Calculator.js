import generateNumber, { makeGameData, makeGame } from '../subfunctions';
import playGame from '..';

const minValue = 1;
const maxValue = 30;
const descriptionCalc = 'What is the result of the expression?';

const makeDataCalc = () => {
  const operand1 = generateNumber(minValue, maxValue);
  const operand2 = generateNumber(minValue, maxValue);
  const numberOfOperation = generateNumber(1, 3);
  let answerCalc;
  let questionCalc;
  switch (numberOfOperation) {
    case 1:
      questionCalc = `Question: ${operand1} + ${operand2}`;
      answerCalc = operand1 + operand2;
      break;
    case 2:
      questionCalc = `Question: ${operand1} - ${operand2}`;
      answerCalc = operand1 - operand2;
      break;
    default:
      questionCalc = `Question: ${operand1} * ${operand2}`;
      answerCalc = operand1 * operand2;
  }
  return makeGameData(questionCalc, answerCalc);
};

const gameCalc = () => playGame(makeGame(descriptionCalc, makeDataCalc));

export default gameCalc;
