import { createStore } from 'redux';
import reducer from './reducer';
import {
  machineMove,
} from './actions';
import Board from '../libs/brandubh/brandubh';

import DEBUG from './debug';

const storeParams = [reducer];

if (DEBUG && typeof window.devToolsExtension === 'function') {
  storeParams.push(window.devToolsExtension());
}

const store = createStore(...storeParams);

setInterval(() => {
  const state = store.getState();
  const {
    board,
    players,
    gameMode,
  } = state || {};

  if (!board || !gameMode || gameMode.isPlayerVsPlayer) {
    return;
  }

  if (Board.isKingCaptured(board)) {
    return;
  }

  if (Board.isKingOnCorner(board)) {
    return;
  }

  const { currentPlayer } = players;

  if (currentPlayer !== 'Marvin') {
    return;
  }

  store.dispatch(machineMove());
}, 1000);

export default store;
