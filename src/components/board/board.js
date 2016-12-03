import React from 'react';

import './styles';
import {
  kingImg,
  redImg,
  greyImg,
} from './images';

const Kitsos = ({ mitsos, color }) => (
  <div>
    {mitsos}
    {color}
  </div>
);

const Img = ({ piece }) => {
  if (!piece) {
    return <span />;
  }

  const imgStr = piece.isKing ? kingImg : piece.isRed ? redImg : greyImg;
  return <img className="piece" src={imgStr} alt={imgStr}/>;
};

Img.propTypes = {
  piece: React.PropTypes.object,
};

const Board = ({ board }) => (
  <div>
    <Kitsos mitsos="hello" color="black"/>
    <table className="wooden-table">
      {[1, 2, 3, 4, 5, 6, 7].map((rowNum) => (
        <tr key={`board-row-${rowNum}`}>
          <td className={rowNum === 1 || rowNum === 7 ? 'corner' : 'cell'}>
            <Img piece={board[rowNum - 1][0]} />
          </td>
          <td className="cell" >
            <Img piece={board[rowNum - 1][1]} />
          </td>
          <td className="cell" >
            <Img piece={board[rowNum - 1][2]} />
          </td>
          <td className={rowNum === 4 ? 'corner' : 'cell'}>
            <Img piece={board[rowNum - 1][3]} />
          </td>
          <td className="cell" >
            <Img piece={board[rowNum - 1][4]} />
          </td>
          <td className="cell" >
            <Img piece={board[rowNum - 1][5]} />
          </td>
          <td className={rowNum === 1 || rowNum === 7 ? 'corner' : 'cell'}>
            <Img piece={board[rowNum - 1][6]} />
          </td>
        </tr>
      ))}
    </table>
  </div>

);

Board.propTypes = {
  board: React.PropTypes.array,
};

export default Board;
