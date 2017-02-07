
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
  isGrey = () => true;
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

  isGreyAt(board, x, y) {
    if (!Board.isEmpty(board[x][y]) && board[x][y].isGrey()) {
      return true;
    }
    return false;
  },

  isColorAt(board, color, x, y) {
    console.log('PPPPPPPPPPP', Board.isEmpty(board, x, y), board[x][y], color);
    if (!Board.isEmpty(board, x, y)
      && board[x][y].color === color) {
      return true;
    }
    return false;
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

  isInBoard(x, y) {
    if (x >= 0 && x <= 6 && y >= 0 && y <= 6) {
      return true;
    }
    return false;
  },

  isEmpty(board, x, y) {
    if (Board.isInBoard(x, y) && board[x][y] === null) {
      return true;
    }
    return false;
  },

  isSameColor(board, x, y, allyX, allyY) {
    if (!Board.isEmpty(board, x, y)
      && !Board.isEmpty(board, allyX, allyY)
      && board[x][y].color === board[allyX][allyY].color) {
      return true;
    }
    return false;
  },

  isAlly(board, color, x, y) {
    if (!Board.isInBoard(x, y)) {
      return true;
    }
    return Board.isColorAt(board, color, x, y);
  },

  isEnemy(board, color, x, y) {
    if (Board.isInBoard(x, y)) {
      return false;
    }
    return !Board.isColorAt(board, color, x, y);
  },

  capture(board, piece, x, y) {
    const color = piece.color;
    const captured = [];
    if (!Board.isEmpty(board, x, y)) {
      return captured;
    }

    if (Board.isAlly(board, color, x + 2, y)
      && Board.isEnemy(board, color, x + 1, y)) {
      const capturedPiece = { x: x + 1, y };
      captured.push(capturedPiece);
    }

    if (Board.isAlly(board, color, x - 2, y)
      && Board.isEnemy(board, color, x - 1, y)) {
      const capturedPiece = { x: x - 1, y };
      captured.push(capturedPiece);
    }

    if (Board.isAlly(board, color, x, y + 2)
      && Board.isEnemy(board, color, x, y + 1)) {
      const capturedPiece = { x, y: y + 1 };
      captured.push(capturedPiece);
    }

    console.log('YYYYYYYYYYYY', color, x, y, x, y - 2, y - 1,
      Board.isAlly(board, color, x, y - 2),
      Board.isEnemy(board, color, x, y - 1));

    if (Board.isAlly(board, color, x, y - 2)
      && Board.isEnemy(board, color, x, y - 1)) {
      const capturedPiece = { x, y: y - 1 };
      captured.push(capturedPiece);
    }

    console.log('YYYYYYYYYYYY END', captured);

    return captured;
  },

  move(board, fromX, fromY, toX, toY) {
    if (Board.isEmpty(board, fromX, fromY) || !Board.isEmpty(board, toX, toY)) {
      return board;
    }

    const piece = board[fromX][fromY];

    if (Board.isCornerOrCenter(toX, toY) && !piece.isKing()) {
      return board;
    }

    if (!Board.isNotStraight(fromX, fromY, toX, toY)) {
      return board;
    }

    const capturedPieces = Board.capture(board, piece, toX, toY);

    const newBoard = [...board];
    newBoard[fromX] = [...board[fromX]];

    newBoard[toX] = [...board[toX]];
    newBoard[toX][toY] = piece;

    newBoard[fromX][fromY] = null;

    console.log('XXXXXXXXXXX', capturedPieces);
    capturedPieces.forEach((cords) => {
      const { x, y } = cords;
      newBoard[x] = [...newBoard[x]];
      newBoard[x][y] = null;
    });

    return newBoard;
  },
};

export default Board;
