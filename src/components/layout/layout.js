import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Help from 'material-ui/svg-icons/action/help';
import { white } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';

import {
  kingImg,
  redImg,
  greyImg,
} from '../board/images';

import '../../App.css';
import { Board } from '../../components';

import { muiTheme } from '../../styles';

import style from './style';
import { actions } from '../../redux-mvc';

import WinnerDialog from '../utils/dialog';

import MobileTearSheet from '../utils/MobileTearSheet';
import ListMenu from '../utils/list';

const Title = ({ winner }) => (
  <div style={style.paperTitle}>
    <h1>BRANDUBH</h1>
    <h3 style={{ marginTop: '240px' }} >{ winner }</h3>
  </div>
);
Title.propTypes = {
  winner: PropTypes.string,
};

const WelcomePaper = ({ winner, dispatch }) => (
  <div style={{ width: '100%', height: '100%', margin: '200px auto 0 auto' }}>
    <Paper style={style.paper} zDepth={5}>
      <Title winner={winner} />
      <RaisedButton
        label="Start Game"
        labelStyle={{ fontSize: '33px', color: 'white' }}
        primary
        style={style.startGame}
        onTouchTap={() => {
          dispatch(actions.newGame());
        }
        }
      />
    </Paper>
  </div>
);
WelcomePaper.propTypes = {
  dispatch: PropTypes.func,
  winner: PropTypes.string,
};

const Layout = ({ dispatch, gameNotStarted, winner }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div style={{ width: '100%', height: '100%' }}>

      {gameNotStarted &&
        <WelcomePaper dispatch={dispatch} />
      }

      <br />
      <br />
      <redImg />
      <div style={{ align: 'center' }}>
        {!gameNotStarted &&
          <ListMenu />
        }
        <Board />
      </div>

      <WinnerDialog
        open={!!winner}
        winner={winner}
      />

      <div>
        <FloatingActionButton
          zDepth={5} style={style.fab}
          onTouchTap={() => { dispatch(actions.undo()); }}
        >
          <Help color={white} />
        </FloatingActionButton>
      </div>
    </div>
  </MuiThemeProvider>
);

Layout.propTypes = {
  dispatch: PropTypes.func,
  gameNotStarted: PropTypes.bool,
  winner: PropTypes.string,
};

export default connect((state) => ({
  gameNotStarted: !state.board,
  winner: state.winner,
}))(Layout);
