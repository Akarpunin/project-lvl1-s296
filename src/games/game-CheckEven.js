import { cons } from 'hexlet-pairs';
import generateNumber from '../generateNumber';

const minValue = 1;
const maxValue = 99;

const playGameCheckEven = () => {
  const firstQuestion = 'Answer "yes" if number even otherwise answer "no".';
  const generateQuestion = () => {
    const question = generateNumber(minValue, maxValue);
    const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
    const secondQuestion = `Question: ${question}`;
    return cons(secondQuestion, correctAnswer);
  };
  return cons(firstQuestion, generateQuestion);
};

export default playGameCheckEven;
