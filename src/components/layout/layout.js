import React, { Component } from 'react';
import { connect } from 'react-redux';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/action/help';
import { fullWhite } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import Paper from 'material-ui/Paper';

import '../../App.css';
import { Board } from '../../components';

import { muiTheme } from '../../styles';

import style from './style';
import { actions } from '../../redux-mvc';

import WinnerDialog from '../utils/dialog';

import MobileTearSheet from '../utils/MobileTearSheet';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/undo';
import ActionGrade from 'material-ui/svg-icons/hardware/gamepad';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import Help from 'material-ui/svg-icons/action/help';


function Title({ winner }) {
  return (<div style={style.paperTitle}>
    <h1>BRANDUBH</h1>
    <h3 style={{ marginTop: '240px' }} >{ winner }</h3>
  </div>
  );
}

const ListMenu = ({ dispatch }) => (
  <MobileTearSheet>
    <List>
      <ListItem
        primaryText="Undo"
        leftIcon={
          <ContentInbox />
        }
        onTouchTap={() => {
          dispatch(actions.undo());
        }
        }
      />
      <ListItem
        primaryText="New Game"
        leftIcon={
          <ActionGrade />
        }
        onTouchTap={() => {
          dispatch(actions.newGame());
        }
        }
      />
      <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
      <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
      <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
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

      {!gameNotStarted &&
        <ListMenu dispatch={dispatch} />
      }

      <br />
      <br />
      <Board />
      <WinnerDialog
        open={!!winner}
        winner={winner}
      />

      <div>
        <FloatingActionButton
          zDepth={5} style={style.fab}
          onTouchTap={() => { dispatch(actions.undo()); }}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    </div>
  </MuiThemeProvider>
);

export default connect((state) => ({
  gameNotStarted: !state.board,
  winner: state.winner,
}))(Layout);
