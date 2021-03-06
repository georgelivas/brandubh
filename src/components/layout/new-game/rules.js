/* eslint-disable */
import React from 'react';
import style from './style';
import {
  startingBoard,
  move,
  captureKing,
  captureVer,
  captureHor,
  tie,
  kingWins } from '../images';
import {
  kingImg,
  redImg,
  greyImg,
} from '../../board/images';

const Rules = () => (
  <div>
    <h3 style={style.h1}>Teams:</h3>

    <pre style={style.p}>
      &emsp; Attackers: 8 red pieces.<br />
      &emsp; Defenders: 4 grey pieces, and a King.<br />
    </pre>
    <img src={redImg} alt={'black'} style={style.ruleImgRed} />
    <img src={greyImg} alt={'white'} style={style.ruleImgSmall} />
    <img src={kingImg} alt={'king'} style={style.ruleImgSmall} />

    <h3 style={style.h1}>Starting Piece Positions:</h3>

    <pre style={style.p}>
      &emsp; • The King is placed at the center of the 7X7 board surrounded
      <br />
      &emsp;&emsp;&emsp; on 4 sides (North, East, South, West) by his defenders.
      <br />
      &emsp; • The 8 attacking pieces are placed in pairs alongside the King's
      <br />
      &emsp;&emsp;&emsp; defenders.
    </pre>

    <img src={startingBoard} alt={'startingBoard'} style={style.ruleImg} />

    <h3 style={style.h1}>Moves:</h3>

    <pre style={style.p}>
      &emsp; • The attackers move first.<br />
      &emsp; • The pieces can only move along the same Row or Column<br />
      &emsp;&emsp;&emsp; by as many empty cells as the player wishes but,<br />
      &emsp; • Cannot, jump over other pieces.<br />
      &emsp; • Pieces can only occupy empty cells.<br />
      &emsp; • Only the King can occupy the center cell but cannot return<br />
      &emsp;&emsp;&emsp; to it once he has left it. He is also the only<br />
      &emsp;&emsp;&emsp; piece that can occupy the 4 corner cells.<br />
      &emsp; • Pieces can pass over the center cell only if it is empty.<br />
    </pre>

    <img src={move} alt={'move'} style={style.ruleImg} />

    <h3 style={style.h1}>Capture:</h3>

    <pre style={style.p}>
      &emsp; • Pieces are captured when surrounded either above and below <br />
      &emsp;&emsp;&emsp; OR to their left and right by enemy pieces. The corner
      <br />
      &emsp;&emsp;&emsp; and the center cells function as enemy pieces. <br />
      &emsp; • The king is unarmed and cannot aid in capture. <br />
      &emsp; • To capture the King still at the center cell he must be <br />
      &emsp;&emsp;&emsp; surrounded N, E, S and W by attackers. At a cell <br />
      &emsp;&emsp;&emsp; next to the center cell or at a boarder cell the King
      <br />
      &emsp;&emsp;&emsp; must be surrounded by attackers on the remaining
      3 sides.<br />
      &emsp; • More than 2 pieces can be captured simultaneously if surrounded
      <br />
      &emsp;&emsp;&emsp; (above and below or left and right)
      on the same row or column <br />
      &emsp;&emsp;&emsp; by enemy pieces.<br />
    </pre>

    <img src={captureVer} alt={'captureVer'} style={style.ruleImgMedium} />
    <img src={captureKing} alt={'captureKing'} style={style.ruleImgMedium} />
    <img src={captureHor} alt={'startingBoard'} style={style.ruleImgMedium} />

    <h3 style={style.h1}>The Winner :</h3>

    <pre style={style.p}>
      &emsp; • Defenders: If the King reaches one of the 4 corner cells.<br />
      &emsp; • Attackers: If they capture the King.<br />
    </pre>

    <img src={captureKing} alt={'captureKing'} style={style.ruleImgMedium} />
    <img src={kingWins} alt={'kingWins'} style={style.ruleImgMedium} />


    <h3 style={style.h1}>Tie Conditions:</h3>

    <pre style={style.p}>
      &emsp; • Inability to make a legal move. All pieces are blocked.<br />
      &emsp; • Repetitive sequence of moves that do not lead to the capture
      <br />
      &emsp;&emsp;&emsp; of an enemy piece.<br />
      &emsp; • Player agreement.<br />
    </pre>

    <img src={tie} alt={'tie'} style={style.ruleImg} />

    <h3 style={style.h1}>Opening Moves:</h3>

    <pre style={style.p}>
      &emsp; • YouTube links.<br />
      <a href="https://youtu.be/vBxOrOD2eD8"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}>
        &emsp;&emsp;&emsp;&emsp;Part 1
      </a>
      <br />
      <a href="https://youtu.be/Lv6rFWB8He4"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}>
        &emsp;&emsp;&emsp;&emsp;Part 2
      </a>
      <br />
      <a href="https://youtu.be/bU025qZ0Yxo"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}>
        &emsp;&emsp;&emsp;&emsp;Part 3
      </a>
    </pre>
  </div>
);

export default Rules;
