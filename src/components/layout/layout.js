import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Board } from '../../components';

import WinnerDialog from '../utils/dialog';
import List from './list-component';
import WelcomePaper from './new-game/welcome-paper';
import logoImg from '../board/images';

const Layout = ({ dispatch, gameNotStarted, winner }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div style={{ width: '100%', height: '100%' }}>
      {gameNotStarted &&
        <div>
          <WelcomePaper dispatch={dispatch} />
        </div>
      }
      <br />
      <br />
      <logoImg />

      <div style={{ align: 'center' }}>
        {!gameNotStarted &&
          <div>
            <List />
          </div>
        }
        <Board />
      </div>

      <WinnerDialog
        open={!!winner}
        winner={winner}
      />
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
