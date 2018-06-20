#!/usr/bin/env node

import playGame from '..';
import playGameCheckEven from '../games/game-CheckEven';

const game = playGameCheckEven();
playGame(game);
