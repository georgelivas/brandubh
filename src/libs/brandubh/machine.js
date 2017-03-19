import _ from 'lodash';
import Board from './brandubh';

function getRandomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

const Machine = {
  move(board, color) {
    const availablePieces = _.shuffle(Board.findAllPiecesOfColor(board, color));
    for (let i = 0; i < availablePieces.length; i++) {
      const { x: fromX, y: fromY } = availablePieces[i];
      const availableSlots =
        _.shuffle(Board.findAllEmptySlots(board, fromX, fromY));
      let slot = availableSlots.pop();
      while (slot) {
        const { x: toX, y: toY } = slot;
        const newBoard = Board.move(board, fromX, fromY, toX, toY);
        if (newBoard !== board) {
          return newBoard;
        }

        slot = availableSlots.pop();
      }

      return board;
    }
  },
};

export default Machine;
