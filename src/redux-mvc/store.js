import { createStore } from 'redux';
import reducer from './reducer';
import { machineMove } from './actions';
import Board from '../libs/brandubh/brandubh';

import DEBUG from './debug';

let store;

if (DEBUG && typeof window.devToolsExtension === 'function') {
  store = createStore(reducer, window.devToolsExtension());
} else {
  store = createStore(reducer);
}

setInterval(() => {
  const state = store.getState();

  if (state.isPlayerVsPlayer) {
    return;
  }

  if (Board.isKingCaptured(state.board)) {
    return;
  }

  if (Board.isKingOnCorner(state.board)) {
    return;
  }

  const { currentPlayer, host } = state.players;

  if (currentPlayer !== host.name) {
    return;
  }

  store.dispatch(machineMove());
}, 1000);

export default store;
