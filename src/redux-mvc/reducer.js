import {
  MOVE,
  UNDO,
  NEW_GAME,
  GAME_NOT_STARTED,
  SELECT_GAME_MODE,
  MACHINE_MOVE,
} from './actions';

import Board from '../libs/brandubh';

import Machine from '../libs/brandubh/machine';

const reducer = (state = { board: null }, action) => {
  switch (action.type) {
    case SELECT_GAME_MODE: {
      return {
        ...state,
        isPlayerVsPlayer: action.payload.isPlayerVsPlayer,
      };
    }

    case GAME_NOT_STARTED: {
      return {
        board: null,
      };
    }

    case NEW_GAME: {
      const newState = {
        players: action.payload,
        board: Board.create(),
        winner: null,
      };
      return {
        ...newState,
        previousState: {
          ...newState,
          currentMoveFrom: null,
        },
      };
    }

    case MACHINE_MOVE: {
      if (state.isPlayerVsPlayer) {
        return state;
      }

      if (Board.isKingCaptured(state.board)) {
        return state;
      }

      if (Board.isKingOnCorner(state.board)) {
        return state;
      }

      if (state.players.currentPlayer !== state.players.host.name) {
        return state;
      }

      const board = Machine.move(state.board, 'RED');
      if (state.board === board) {
        return state;
      }

      const { host, guest, currentPlayer } = state.players;

      const nextPlayer = (currentPlayer === host.name) ?
      guest.name : host.name;

      const players = {
        ...state.players,
        currentPlayer: nextPlayer,
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
        previousState: {
          ...state,
          currentMoveFrom: null,
        },
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
          previousState: state,
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
          previousState: {
            ...state,
            currentMoveFrom: null,
          },
        };
      }

      return {
        ...state,
        currentMoveFrom: null,
      };
    }

    case UNDO:
      return {
        ...state.previousState,
      };
    default:
      return state;
  }
};

export default reducer;
