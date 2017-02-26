const RED = 'RED';
const GREY = 'GREY';

const Red = {
  color: RED,
  isGrey: false,
  isRed: true,
  isKing: false,
};

const Grey = {
  color: GREY,
  isGrey: true,
  isRed: false,
  isKing: false,
};

const King = {
  color: GREY,
  isGrey: true,
  isRed: false,
  isKing: true,
};

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

    board[0][3] = Red;
    board[1][3] = Red;
    board[2][3] = Grey;
    board[3][3] = King;
    board[4][3] = Grey;
    board[5][3] = Red;
    board[6][3] = Red;
    board[3][0] = Red;
    board[3][1] = Red;
    board[3][2] = Grey;
    board[3][4] = Grey;
    board[3][5] = Red;
    board[3][6] = Red;

    return board;
  },

  isGreyAt(board, x, y) {
    if (Board.isInBoard(x, y) &&
      !Board.isEmpty(board, x, y) && board[x][y].isGrey) {
      return true;
    }

    return false;
  },

  isColorAt(board, color, x, y) {
    if (Board.isInBoard(x, y)
      && !Board.isEmpty(board, x, y)
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
    return (fromX === toX && fromY !== toY)
      || (fromX !== toX && fromY === toY);
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
    if (Board.isInBoard(x, y)
      && Board.isInBoard(allyX, allyY)
      && !Board.isEmpty(board, x, y)
      && !Board.isEmpty(board, allyX, allyY)
      && board[x][y].color === board[allyX][allyY].color) {
      return true;
    }

    return false;
  },

  isAlly(board, color, x, y) {
    if (!Board.isInBoard(x, y) || Board.isCornerOrCenter(x, y)) {
      return true;
    }

    return Board.isColorAt(board, color, x, y);
  },

  isEnemy(board, color, x, y) {
    if (!Board.isInBoard(x, y) || Board.isCornerOrCenter(x, y)) {
      return true;
    }

    if (Board.isEmpty(board, x, y)) {
      return false;
    }

    return !Board.isColorAt(board, color, x, y);
  },

  kingPosition(board) {
    let x;
    let y;
    board.forEach((row, i) => row.forEach((piece, j) => {
      if (piece !== null && piece.isKing) {
        [x, y] = [i, j];
      }
    }));
    return { x, y };
  },

  isKingCaptured(board) {
    const { x, y } = Board.kingPosition(board);
    if (Board.isEnemy(board, Grey.color, x + 1, y)
      && Board.isEnemy(board, Grey.color, x - 1, y)
      && Board.isEnemy(board, Grey.color, x, y + 1)
      && Board.isEnemy(board, Grey.color, x, y - 1)) {
      return true;
    }

    return false;
  },

  isKingOnCorner(board) {
    const { x, y } = Board.kingPosition(board);

    if ((x === 0 && y === 0) ||
      (x === 0 && y === 6) ||
      (x === 6 && y === 6) ||
      (x === 6 && y === 0)) {
      return true;
    }

    return false;
  },

  isKingAt(board, x, y) {
    return Board.isInBoard(x, y)
      && !Board.isEmpty(board, x, y)
      && board[x][y].isKing;
  },

  capture(board, piece, x, y) {
    const color = piece.color;
    const captured = [];
    if (piece.isKing) {
      return captured;
    }

    if (!Board.isEmpty(board, x, y)) {
      return captured;
    }

    if (Board.isInBoard(x + 1, y)
      && Board.isAlly(board, color, x + 2, y)
      && Board.isEnemy(board, color, x + 1, y)
      && !Board.isKingAt(board, x + 1, y)) {
      const capturedPiece = { x: x + 1, y };
      captured.push(capturedPiece);
    }

    if (Board.isInBoard(x - 1, y)
      && Board.isAlly(board, color, x - 2, y)
      && Board.isEnemy(board, color, x - 1, y)
      && !Board.isKingAt(board, x - 1, y)) {
      const capturedPiece = { x: x - 1, y };
      captured.push(capturedPiece);
    }

    if (Board.isInBoard(x, y + 1)
      && Board.isAlly(board, color, x, y + 2)
      && Board.isEnemy(board, color, x, y + 1)
      && !Board.isKingAt(board, x, y + 1)) {
      const capturedPiece = { x, y: y + 1 };
      captured.push(capturedPiece);
    }

    if (Board.isInBoard(x, y - 1)
      && Board.isAlly(board, color, x, y - 2)
      && Board.isEnemy(board, color, x, y - 1)
      && !Board.isKingAt(board, x, y - 1)) {
      const capturedPiece = { x, y: y - 1 };
      captured.push(capturedPiece);
    }

    return captured;
  },

  move(board, fromX, fromY, toX, toY) {
    if (Board.isEmpty(board, fromX, fromY) || !Board.isEmpty(board, toX, toY)) {
      return board;
    }

    const piece = board[fromX][fromY];

    if (Board.isCornerOrCenter(toX, toY) && !piece.isKing) {
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
    capturedPieces.forEach((cords) => {
      const { x, y } = cords;
      newBoard[x] = [...newBoard[x]];
      newBoard[x][y] = null;
    });

    return newBoard;
  },
};

export default Board;
