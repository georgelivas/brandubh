import React from 'react';
import { connect } from 'react-redux';

import { actions } from '../../redux-mvc';
import './styles';
import {
  kingImg,
  redImg,
  greyImg,
} from './images';

const Img = ({ piece }) => {
  if (!piece) {
    return <span />;
  }

  const imgStr = piece.isKing() ? kingImg : piece.isRed() ? redImg : greyImg;
  return <img className="piece" src={imgStr} alt={imgStr}/>;
};

Img.propTypes = {
  piece: React.PropTypes.object,
};

const cellClass = (rowNum, colSymbol) => {
  if ((rowNum === 1 || rowNum === 7) && (colSymbol === 'A' || colSymbol === 'G')) {
    return 'corner';
  }
  if (rowNum === 4  && colSymbol === 'D') {
    return 'center';
  }
  return 'cell';
};

const ColHeaders = () => (
  <tr>
  {[' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G'].map((colSymbol) => (
    <td className={'cellNum'} >
    {colSymbol}
    </td>
  ))}
  </tr>
);

const Cell = ({ rowNum, colSymbol, piece, dispatch }) => (
  <td className={cellClass(rowNum, colSymbol)} onTouchTap={() => {dispatch(actions.move(rowNum, colSymbol))}}>
    <Img piece={piece} />
  </td>
);
const C = connect()(Cell);

const Board = ({ board }) => (
  board ? (
    <div>
      <table className="wooden-table">
        <ColHeaders />
        {[ 1, 2, 3, 4, 5, 6, 7].map((rowNum) => (
          <tr key={`board-row-${rowNum}`}>
            <td className={'cellNum'} children={rowNum} />
            <C rowNum={rowNum} colSymbol={'A'} piece={board[rowNum - 1][0]} />
            <C rowNum={rowNum} colSymbol={'B'} piece={board[rowNum - 1][1]} />
            <C rowNum={rowNum} colSymbol={'C'} piece={board[rowNum - 1][2]} />
            <C rowNum={rowNum} colSymbol={'D'} piece={board[rowNum - 1][3]} />
            <C rowNum={rowNum} colSymbol={'E'} piece={board[rowNum - 1][4]} />
            <C rowNum={rowNum} colSymbol={'F'} piece={board[rowNum - 1][5]} />
            <C rowNum={rowNum} colSymbol={'G'} piece={board[rowNum - 1][6]} />
            <td className={'cellNum'} children={rowNum} />
          </tr>
        ))}
        <ColHeaders />
      </table>
    </div>
  ) : (
    <div />
  )

);

Board.propTypes = {
  board: React.PropTypes.array,
};

export default connect(({ board }) => ({ board }))(Board);
