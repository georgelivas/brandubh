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
        winner: null,
      };
      return {
        ...newState,
        previewsState: null,

        // {
        //   ...newState,
        //   currentMoveFrom: null,
        // },
      };
    }

    case MOVE: {
      if (Board.isKingCaptured(state.board)) {
        return state;
      }

      if (Board.isKingOnCorner(state.board)) {
        return state;
      }

      const currentMoveFrom = state.currentMoveFrom;
      if (!currentMoveFrom) {
        return {
          ...state,
          currentMoveFrom: action.payload,
          previewsState: null,

          // {
          //   ...state,
          //   currentMoveFrom: null,
          // },
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
          previewsState: null,

          // {
          //   ...state,
          //   currentMoveFrom: null,
          // },
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
          previewsState: null,
          // {
          //   ...state,
          //   currentMoveFrom: null,
          // },
        };

        let winner = null;
        if (Board.isKingCaptured(board)) {
          winner = 'host';
        }

        if (Board.isKingOnCorner(board)) {
          winner = 'guest';
        }

        return {
          ...state,
          board,
          players,
          winner,
          currentMoveFrom: null,
          previewsState: null,

          // {
          //   ...state,
          //   currentMoveFrom: null,
          // },
        };
      }

      return {
        ...state,
        currentMoveFrom: null,
        previewsState: null,
        // {
        //   ...state,
        //   currentMoveFrom: null,
        // },
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
