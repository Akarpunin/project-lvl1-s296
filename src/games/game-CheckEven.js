import generateNumber, { isEven, makeGameData, makeGame } from '../subfunctions';
import playGame from '..';

const minValue = 1;
const maxValue = 99;
const descriptionCheckEven = 'Answer "yes" if number even otherwise answer "no".';

const makeDataCheckEven = () => {
  const questionNumber = generateNumber(minValue, maxValue);
  const answerCheckEven = isEven(questionNumber) ? 'yes' : 'no';
  const questionCheckEven = `Question: ${questionNumber}`;
  return makeGameData(questionCheckEven, answerCheckEven);
};

const gameCheckEven = () => playGame(makeGame(descriptionCheckEven, makeDataCheckEven));

export default gameCheckEven;
