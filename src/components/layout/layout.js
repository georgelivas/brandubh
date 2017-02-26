import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Help from 'material-ui/svg-icons/action/help';
import { white } from 'material-ui/styles/colors';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Board } from '../../components';

import { actions } from '../../redux-mvc';
import WinnerDialog from '../utils/dialog';

import ListMenu from '../utils/list';

import WelcomePaper from './welcome-paper';
import style from './style';

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
