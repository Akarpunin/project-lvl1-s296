#!/usr/bin/env node

import playGame from '..';
import playGameCalculator from '../games/game-Calculator';

const game = playGameCalculator();
playGame(game);
