const MOVE = 'MOVE';
const UNDO = 'UNDO';
const NEW_GAME = 'NEW_GAME';

const move = (fromX, fromY, toX, toY) => {
  return {
    type:MOVE,
    payload: {
      fromX,
      fromY,
      toX,
      toY,
    },
  };
};

const undo = () => ({
  type: UNDO,
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
    starterName,
  }
});

export {
  MOVE,
  UNDO,
  NEW_GAME,

  move,
  undo,
  newGame,
};
