import React, { Component } from 'react';
import { connect } from 'react-redux';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { fullWhite } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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

const PaperExampleSimple = () => (
  <div>
    <Paper style={style.paper} zDepth={5} />
  </div>
);

class Layout extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBarMenu />
          {/* <PaperExampleSimple /> */}
          <RaisedButton
            label="Start Game!" primary={true}
            style={style.undoButton} onTouchTap={() => {
              dispatch(actions.newGame());
            }
            }
          />
          <FlatButtonIcon />
          <RaisedButton
            label="Undo" primary={true}
            style={style.undoButton} onTouchTap={() => {
              dispatch(actions.undo());
            }
            }
          />
          <br />
          <br />
          <Board />

          <div>
            <FloatingActionButton
              zDepth={2} style={style.fab}
              onTouchTap={() => { dispatch(actions.undo()); }}
            >
              <ContentAdd />
            </FloatingActionButton>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect()(Layout);
