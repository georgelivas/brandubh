const MOVE = 'MOVE';
const UNDO = 'UNDO';
const NEW_GAME = 'NEW_GAME';
const GAME_NOT_STARTED = 'GAME_NOT_STARTED';
const SELECT_GAME_MODE = 'SELECT_GAME_MODE';
const MACHINE_MOVE = 'MACHINE_MOVE';

const move = (inX, inY) => {
  const x = parseInt(inX, 10) - 1;
  const y = inY.charCodeAt(0) - 65;

  return {
    type: MOVE,
    payload: {
      x,
      y,
    },
  };
};

const machineMove = () => ({
  type: MACHINE_MOVE,
});

const undo = () => ({
  type: UNDO,
});

const selectGameMode = (isPlayerVsPlayer) => ({
  type: SELECT_GAME_MODE,
  payload: {
    isPlayerVsPlayer,
  },
});

const gameNotStarted = () => ({
  type: GAME_NOT_STARTED,
});

const newGame = (guestName, starterName) => ({
  type: NEW_GAME,
  payload: {
    host: {
      name: 'Marvin',
    },
    guest: {
      name: guestName,
    },
    currentPlayer: 'Marvin',
  },
});

export {
  MOVE,
  UNDO,
  NEW_GAME,
  GAME_NOT_STARTED,
  SELECT_GAME_MODE,
  MACHINE_MOVE,

  move,
  undo,
  newGame,
  gameNotStarted,
  selectGameMode,
  machineMove,
};
