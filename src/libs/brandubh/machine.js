import Board from './brandubh';


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - (min + 1))) + min;
}

console.log('xxxxxxxxxxxxxxxxxxxxxx', getRandomInt(1, 7));

function createCoordinates() {
  const x = getRandomInt(1, 7);
  const y = getRandomInt(1, 7);
  console.log('xxxxxxxxxxxxxxxxxxxxxx', x, y);
  return ({ x, y });
}

const coordinates = createCoordinates();
const x = coordinates.x;
const y = coordinates.y;


const Machine = {
  nextMove(board, color) {
    const availablePieces = Board.findAllPiecesOfColor(board, color);
    const choosePiece =
    findAllEmptySlots(board)
  }
};

export default Machine;
