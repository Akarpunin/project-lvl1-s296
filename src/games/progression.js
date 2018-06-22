import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import playGame from '..';

const minInitialTerm = 1;
const maxInitialTerm = 20;
const minDifference = 1;
const maxDifference = 10;
const description = 'What number is missing in this progression?';
const termsCount = 10;

const makeProgression = (initialTerm, difference, termsNumber, numberOfUnknown) => {
  let progression = '';
  for (let i = 1; i <= termsNumber; i += 1) {
    if (i === numberOfUnknown) progression = `${progression} ..`;
    else progression = `${progression} ${initialTerm + ((i - 1) * difference)}`;
  }
  return progression;
};

const getAnswer = (initialTerm, difference, numberOfUnknown) =>
  String(initialTerm + ((numberOfUnknown - 1) * difference));

const makeData = () => {
  const initialTerm = generateNumber(minInitialTerm, maxInitialTerm);
  const difference = generateNumber(minDifference, maxDifference);
  const numberOfUnknown = generateNumber(1, termsCount);
  const question = makeProgression(initialTerm, difference, termsCount, numberOfUnknown);
  const answer = getAnswer(initialTerm, difference, numberOfUnknown);
  return cons(question, answer);
};

const gameProgression = () => playGame(description, makeData);

export default gameProgression;
