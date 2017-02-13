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

import DialogExampleCustomWidth from '../utils/dialog';

const FlatButtonIcon = () => (
  <div>
    <FlatButton
      icon={<ActionAndroid color={fullWhite} />}
      style={style.icon}
    />
  </div>
);

function Title({ winner }) {
  return (<div style={style.paperTitle}>
    <h1>BRANDUBH</h1>
    <h3 style={{ marginTop: '240px' }} >{ winner }</h3>
  </div>
  );
}

const PaperExampleSimple = ({ winner, dispatch }) => (
  <div style={{ width: '100%', height: '100%', margin: '200px auto 0 auto' }}>
    <Paper style={style.paper} zDepth={5}>
      <Title winner={winner} />
      <RaisedButton
        label="Start Game"
        labelStyle={{ fontSize: '33px', color: 'white' }}
        primary
        style={style.startGame} onTouchTap={() => {
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

      {/* <AppBarMenu /> */}

      {gameNotStarted &&
        <PaperExampleSimple dispatch={dispatch} />
      }

      <DialogExampleCustomWidth open={!!winner} />

      {!gameNotStarted && <RaisedButton
        label="Undo"
        primary
        style={style.undoButton} onTouchTap={() => dispatch(actions.undo())}
      />}
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
  winner: state.winner,
}))(Layout);
