const MOVE = 'MOVE';
const UNDO = 'UNDO';
const NEW_GAME = 'NEW_GAME';

const move = (inX, inY) => {
  const x = parseInt(inX) - 1;
  const y = inY.charCodeAt(0) - 65;
  
  return {
    type:MOVE,
    payload: {
      x,
      y,
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
    currentPlayer: starterName,
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
