import React, { Component } from 'react';
import { connect } from 'react-redux';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
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
import AppBarMenu from './app-bar';
import { actions } from '../../redux-mvc';

const FlatButtonIcon = () => (
  <div>
    <FlatButton
      icon={<ActionAndroid color={fullWhite} />}
      style={style.icon}
    />
  </div>
);

const PaperExampleSimple = ({ dispatch }) => (
  <div>
    <Paper style={style.paper} zDepth={5} />
    <RaisedButton
      label="Start Game"
      primary
      style={style.startGame} onTouchTap={() => {
        dispatch(actions.newGame());
      }
      }
    />
  </div>
);

const Layout = ({ dispatch, gameNotStarted }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div>
      <AppBarMenu />
      {gameNotStarted &&
        <PaperExampleSimple dispatch={dispatch} />
      }
      <RaisedButton
        label="Undo"
        primary
        style={style.undoButton} onTouchTap={() => dispatch(actions.undo())}
      />
      <br />
      <br />
      <Board />

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
}))(Layout);
