import {
  MOVE,
  UNDO,
  NEW_GAME,
} from './actions';

import Board from '../libs/brandubh';

export default (state = { board: null }, action) => {
  switch (action.type) {
    case NEW_GAME: {
      const newState = {
        players: action.payload,
        board: Board.create(),
      };
      return {
        ...newState,
        previewsState: {
          ...newState,
          currentMoveFrom: null,
        },
      };
    }

    case MOVE: {
      const currentMoveFrom = state.currentMoveFrom;
      if (!currentMoveFrom) {
        return {
          ...state,
          currentMoveFrom: action.payload,
          previewsState: {
            ...state,
            currentMoveFrom: null,
          },
        };
      }

      const { x, y } = currentMoveFrom;
      const { host, guest, currentPlayer } = state.players;
      const isGrey = Board.isGreyAt(state.board, x, y);

      if ((currentPlayer !== guest.name && isGrey)
        || (currentPlayer === guest.name && !isGrey)) {
        return {
          ...state,
          currentMoveFrom: null,
          previewsState: {
            ...state,
            currentMoveFrom: null,
          },
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
        const nextPlayer = (currentPlayer === host.name) ?
        guest.name : host.name;

        const players = {
          ...state.players,
          currentPlayer: nextPlayer,
          previewsState: {
            ...state,
            currentMoveFrom: null,
          },
        };

        return {
          ...state,
          board,
          players,
          currentMoveFrom: null,
          previewsState: {
            ...state,
            currentMoveFrom: null,
          },
        };
      }

      return {
        ...state,
        currentMoveFrom: null,
        previewsState: {
          ...state,
          currentMoveFrom: null,
        },
      };
    }

    case UNDO:
      return {
        ...state.previewsState,
      };
    default:
      return state;
  }
};
