import React from 'react';

class Piece {
  static type = 'PIECE';

  constructor (color, type = Piece.type) {
    this.type = type;
    this.color = color;
  }

  toString () {
    return `${this.type} ${this.color} ${this.x} ${this.y}`;
  }
}

class Red extends Piece {
  static color = 'RED';

  constructor () {
    super(Red.color);
  }

  isRed () {
    return true;
  }

  oppositeColor () {
    return Grey.color;
  }
}

class Grey extends Piece {
  static color = 'GREY';
  constructor () {
    super(Grey.color);
  }

  isGrey () {
    return true;
  }

  oppositeColor () {
    return Red.color;
  }
}

class King extends Piece {
  static color = 'GREY';
  static type = 'KING';

  constructor () {
    super(King.type);
  }

  isKing () {
    return true;
  }

  oppositeColor () {
    return Red.color;
  }
}

/*
#### ##    ## #### ########        ########   #######     ###    ########  ########
 ##  ###   ##  ##     ##           ##     ## ##     ##   ## ##   ##     ## ##     ##
 ##  ####  ##  ##     ##           ##     ## ##     ##  ##   ##  ##     ## ##     ##
 ##  ## ## ##  ##     ##           ########  ##     ## ##     ## ########  ##     ##
 ##  ##  ####  ##     ##           ##     ## ##     ## ######### ##   ##   ##     ##
 ##  ##   ###  ##     ##    ###    ##     ## ##     ## ##     ## ##    ##  ##     ##
#### ##    ## ####    ##    ###    ########   #######  ##     ## ##     ## ########
*/


const Board = {
  create() {
    const board = [
      [ null, null, null, null, null, null, null ],
      [ null, null, null, null, null, null, null ],
      [ null, null, null, null, null, null, null ],
      [ null, null, null, null, null, null, null ],
      [ null, null, null, null, null, null, null ],
      [ null, null, null, null, null, null, null ],
      [ null, null, null, null, null, null, null ],
      [ null, null, null, null, null, null, null ]
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

    const newBoard = [...board];
    newBoard[fromX] = [...board[fromX]];
    newBoard[fromX][fromY] = null;

    newBoard[toX] = [...board[toX]];
    newBoard[toX][toY] = piece;
  }
};

export default Board;
