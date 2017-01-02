import {
  MOVE,
  UNDO,
  NEW_GAME,
} from './actions';

import Board from '../libs/brandubh';

export default (state = { board: null }, action) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        players: action.payload,
        board: Board.create(),
      };

    case MOVE: {
      const currentMoveFrom = state.currentMoveFrom;
      if (!currentMoveFrom) {
        return {
          ...state,
          currentMoveFrom: action.payload,
        };
      }

      const board = Board.move(
        state.board,
        currentMoveFrom.x,
        currentMoveFrom.y,
        action.payload.x,
        action.payload.y
      );

      if (board !== state.board) {
        const { host, guest, currentPlayer } = state.players;

        const nextPlayer = (currentPlayer === host.name) ?
        guest.name : host.name;

        const players = {
          ...state.players,
          currentPlayer,
          nextPlayer,
        };

        return {
          ...state,
          board,
          players,
          currentMoveFrom: null,
        };
      }

      return {
        ...state,
        currentMoveFrom: null,
      };
    }

    case UNDO:
      return state;
    default:
      return state;
  }
};
