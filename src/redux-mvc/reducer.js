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

const reducer = (
  state = {
    board: null,
    gameMode: null,
  },
  action
) => {
  switch (action.type) {
    case SELECT_GAME_MODE: {
      const {
        gameMode: {
          playerVsPlayer,
          playerVsMachine,
        } = {},
      } = state;
      const { payload } = action;
      return {
        ...state,
        gameMode: {
          ...payload,
          playerVsPlayer: {
            ...(playerVsPlayer || {}),
            ...(payload.playerVsPlayer || {}),
          },
          playerVsMachine: {
            ...(playerVsMachine || {}),
            ...(payload.playerVsMachine || {}),
          },
        },
      };
    }

    case GAME_NOT_STARTED: {
      return {
        board: null,
      };
    }

    case NEW_GAME: {
      if (!state.gameMode) {
        return state;
      }
      const {
        isPlayerVsPlayer,
        playerVsPlayer: {
          greyPlayerName,
          redPlayerName,
        } = {},
        playerVsMachine: {
          playerName,
          playerColor,
        } = {},
      } = state.gameMode;

      if (isPlayerVsPlayer && !(greyPlayerName && redPlayerName)) {
        return state;
      }

      if (!isPlayerVsPlayer && !(playerName && playerColor)) {
        return state;
      }

      let players;
      if (isPlayerVsPlayer) {
        players = {
          grey: greyPlayerName,
          red: redPlayerName,
          currentPlayer: redPlayerName,
        };
      } else if (playerColor === 'GREY') {
        players = {
          grey: playerName,
          red: 'Marvin',
          currentPlayer: 'Marvin',
        };
      } else {
        players = {
          grey: 'Marvin',
          red: playerName,
          currentPlayer: playerName,
        };
      }

      const newState = {
        players,
        board: Board.create(),
        winner: null,
        gameMode: { ...state.gameMode },
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
      const {
        isPlayerVsPlayer,
      } = state.gameMode || {};

      if (isPlayerVsPlayer) {
        return state;
      }

      if (Board.isKingCaptured(state.board)) {
        return state;
      }

      if (Board.isKingOnCorner(state.board)) {
        return state;
      }

      if (state.players.currentPlayer !== 'Marvin') {
        return state;
      }

      const marvinColor = state.players.grey === 'Marvin' ? 'GREY' : 'RED';
      console.log('===============', marvinColor);
      const board = Machine.move(state.board, marvinColor);
      if (state.board === board) {
        console.log('--------------=', marvinColor);
        return state;
      }

      const { grey, red, currentPlayer } = state.players;

      const nextPlayer = (currentPlayer === grey) ? red : grey;

      const players = {
        ...state.players,
        currentPlayer: nextPlayer,
      };

      let winner = null;
      if (Board.isKingCaptured(board)) {
        winner = red;
      }

      if (Board.isKingOnCorner(board)) {
        winner = grey;
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
      const { grey, red, currentPlayer } = state.players;
      const isGrey = Board.isGreyAt(state.board, x, y);

      if ((currentPlayer === red && isGrey)
        || (currentPlayer === grey && !isGrey)) {
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
        const nextPlayer = (currentPlayer === grey) ? red : grey;

        const players = {
          ...state.players,
          currentPlayer: nextPlayer,
        };

        let winner = null;
        if (Board.isKingCaptured(board)) {
          winner = red;
        }

        if (Board.isKingOnCorner(board)) {
          winner = grey;
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
