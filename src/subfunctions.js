import { cons } from 'hexlet-pairs';

const generateNumber = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const isEven = num => (num % 2 === 0);

const makeGameData = (question, answer) => cons(question, answer);
const makeGame = (description, gameData) => cons(description, gameData);

export { generateNumber as default, isEven, makeGameData, makeGame };
