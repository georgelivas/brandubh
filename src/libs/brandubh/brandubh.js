
class Piece {
  static type = 'PIECE';

  constructor(color, type = Piece.type) {
    this.type = type;
    this.color = color;
  }

  isRed = () => false;
  isGrey = () => false;
  isKing = () => false;

  toString() {
    return `${this.type} ${this.color} ${this.x} ${this.y}`;
  }
}

class Red extends Piece {
  static color = 'RED';

  constructor() {
    super(Red.color);
  }

  isRed = () => true;
  oppositeColor = () => Grey.color;
}

class Grey extends Piece {
  static color = 'GREY';
  constructor() {
    super(Grey.color);
  }

  isGrey = () => true;
  oppositeColor = () => Red.color;
}

class King extends Piece {
  static color = 'GREY';
  static type = 'KING';

  constructor() {
    super(King.type);
  }

  isKing = () => true;

  oppositeColor = () => Red.color;
}

const Board = {
  create() {
    const board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];

    // Pieces starting posisions on Board

    board[0][3] = new Red();
    board[1][3] = new Red();
    board[2][3] = new Grey();
    board[3][3] = new King();
    board[4][3] = new Grey();
    board[5][3] = new Red();
    board[6][3] = new Red();
    board[3][0] = new Red();
    board[3][1] = new Red();
    board[3][2] = new Grey();
    board[3][4] = new Grey();
    board[3][5] = new Red();
    board[3][6] = new Red();

    return board;
  },

  isCornerOrCenter(x, y) {
    return (
      (x === 0 && y === 0) ||
      (x === 0 && y === 6) ||
      (x === 6 && y === 6) ||
      (x === 6 && y === 0) ||
      (x === 3 && y === 3)
    );
  },

  isNotStraight(fromX, fromY, toX, toY) {
    return (fromX === toX && fromY !== toY) || (fromX !== toX && fromY === toY);
  },

  capture(board, toX, toY) {

    const canCaptureRight = (
      board[toX + 1][toY] &&
      board[toX + 2][toY] &&
      board[toX + 1][toY].oppositeColor() &&
      !board[toX + 2][toY].oppositeColor() &&
      !board[toX][toY].isKing() &&
      !board[toX + 1][toY].isKing() &&
      !board[toX + 2][toY].isKing()
    );

    if (canCaptureRight ||

      (
        board[toX - 1][toY] &&
        board[toX - 2][toY] &&
        board[toX - 1][toY].oppositeColor() &&
      !board[toX - 2][toY].oppositeColor() &&
      !board[toX][toY].isKing() &&
      !board[toX - 1][toY].isKing() &&
      !board[toX - 2][toY].isKing()) ||

      (
        board[toX][toY + 1] &&
        board[toX][toY + 2] &&
        board[toX][toY + 1].oppositeColor() &&
      !board[toX][toY + 2].oppositeColor() &&
      !board[toX][toY].isKing() &&
      !board[toX][toY + 1].isKing() &&
      !board[toX][toY + 2].isKing()) ||

      (
        board[toX][toY - 1] &&
        board[toX][toY - 2] &&
        board[toX][toY - 1].oppositeColor() &&
      !board[toX][toY - 2].oppositeColor() &&
      !board[toX][toY].isKing() &&
      !board[toX][toY - 1].isKing() &&
      !board[toX][toY - 2].isKing())
    ) {
      return true;
    }
    return false;
  },

  move(board, fromX, fromY, toX, toY) {
    const piece = board[fromX][fromY];
    if (piece === null) {
      return board;
    }
    if (board[toX][toY] !== null) {
      return board;
    }
    if (Board.isCornerOrCenter(toX, toY) && !piece.isKing()) {
      return board;
    }
    if (!Board.isNotStraight(fromX, fromY, toX, toY)) {
      return board;
    }
    if (Board.capture(board, toX, toY)) {
      const capturedPiece = board[toX + 1][toY] = null;
      return capturedPiece;
    }

    const newBoard = [...board];
    newBoard[fromX] = [...board[fromX]];

    newBoard[toX] = [...board[toX]];
    newBoard[toX][toY] = piece;

    newBoard[fromX][fromY] = null;

    return newBoard;
  },
};

export default Board;
