import {
  MOVE,
  UNDO,
  NEW_GAME,
  move,
  undo,
  newGame,
} from './actions';

import Board from '../libs/brandubh'

export default (state = { board: null }, action) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        players: action.payload,
        board: Board.create(),
        currentPlayer: action.payload.starterName,
      };

    case MOVE:
      return state;

    case UNDO:
      return state;

    default:
      return state;

  }
};
