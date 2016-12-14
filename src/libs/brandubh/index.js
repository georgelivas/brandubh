import React from 'react';

class Piece {
  static type = 'PIECE';

  constructor (board, x, y, color, type = Piece.type) {
    board[x][y] = this;
    this.board = board;
    this.x = x;
    this.y = y;
    this.type = type;
    this.color = color;
  }
  /*
  ##     ##  #######  ##     ## ########
  ###   ### ##     ## ##     ## ##
  #### #### ##     ## ##     ## ##
  ## ### ## ##     ## ##     ## ######
  ##     ## ##     ##  ##   ##  ##
  ##     ## ##     ##   ## ##   ##
  ##     ##  #######     ###    ########
  */


  move (x, y) {
    const { board } = this;

    if (board[x][y] !== null) {
      return 'Not valid move!';
    }

    if (board.isCornerOrCenter(x, y) && !this.isKing()) {
      return 'Not valid move!';
    }

    if (this.x === x || this.y === y) {
      board[x][y] = board[this.x][this.y];
      board[this.x][this.y] = null;
      this.x = x;
      this.y = y;
    } else {
      return 'Not valid move!';
    }
  }

  toString () {
    return `${this.type} ${this.color} ${this.x} ${this.y}`;
  }
}

class Red extends Piece {
  static color = 'RED';

  constructor (board, x, y) {
    super(board, x, y, Red.color);
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
  constructor (board, x, y) {
    super(board, x, y, Grey.color);
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

  constructor (board, x, y) {
    super(board, x, y, King.type);
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


class Board {
  constructor () {
    this.board = [
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
    new Red(this.board, 0, 4);
    new Red(this.board, 1, 3);
    new Grey(this.board, 2, 3);
    new King(this.board, 3, 3);
    new Grey(this.board, 4, 3);
    new Red(this.board, 5, 3);
    new Red(this.board, 6, 3);
    new Red(this.board, 3, 0);
    new Red(this.board, 3, 1);
    new Grey(this.board, 3, 2);
    new Grey(this.board, 3, 4);
    new Red(this.board, 3, 5);
    new Red(this.board, 3, 6);
  }

  isCornerOrCenter (x, y) {
    return (
      (x === 0 && y === 0) ||
      (x === 0 && y === 6) ||
      (x === 6 && y === 6) ||
      (x === 6 && y === 0) ||
      (x === 3 && y === 3)
    );
  }
}

// create the board
export const board = new Board();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const printIt = [
  'Start!'
];

export const brandubh = () => (
  <div>
  {printIt.map((item) => (
    <div>
    {item}
    </div>
  ))}
  </div>
);
