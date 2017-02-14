import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Help from 'material-ui/svg-icons/action/help';
import { white } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Undo from 'material-ui/svg-icons/content/undo';
import VideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import Error from 'material-ui/svg-icons/alert/error';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';

import '../../App.css';
import { Board } from '../../components';

import { muiTheme } from '../../styles';

import style from './style';
import { actions } from '../../redux-mvc';

import WinnerDialog from '../utils/dialog';

import MobileTearSheet from '../utils/MobileTearSheet';

const Title = ({ winner }) => (
  <div style={style.paperTitle}>
    <h1>BRANDUBH</h1>
    <h3 style={{ marginTop: '240px' }} >{ winner }</h3>
  </div>
);
Title.propTypes = {
  winner: PropTypes.string,
};

const ListMenu = ({ winner, dispatch }) => (
  <MobileTearSheet>
    <List>
      <ListItem
        primaryText="Undo"
        disabled={!!winner}
        leftIcon={
          <Undo color={white} />
        }
        onTouchTap={() => {
          if (!winner) {
            dispatch(actions.undo());
          }
        }}
        style={{ opacity: (winner ? 0.2 : 1) }}
      />
      <ListItem
        primaryText="New Game"
        leftIcon={
          <VideogameAsset color={white} />
        }
        onTouchTap={() => {
          dispatch(actions.newGame());
        }
        }
      />
      <ListItem primaryText="Hint" leftIcon={<Error color={white} />} />
      <ListItem primaryText="Drafts" leftIcon={<ContentDrafts color={white} />} />
      <ListItem primaryText="Help" leftIcon={<Help color={white} />} />
    </List>
  </MobileTearSheet>
);

const PaperExampleSimple = ({ winner, dispatch }) => (
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

const Layout = ({ dispatch, gameNotStarted, winner }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div style={{ width: '100%', height: '100%' }}>

      {gameNotStarted &&
        <PaperExampleSimple dispatch={dispatch} />
      }

      <br />
      <br />

      <div style={{ align: 'center' }}>
        {!gameNotStarted &&
          <ListMenu dispatch={dispatch} winner={winner} />
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
