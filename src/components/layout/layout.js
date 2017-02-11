import React, { Component } from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { orange500, cyan500, fullWhite } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import Paper from 'material-ui/Paper';

import '../../App.css';
import { Board } from '../../components';

import { muiTheme } from '../../styles';

import style from './style';
import AppBarMenu from './app-bar';

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
    <Paper style={style} zDepth={5} />
  </div>
);

const paperStyle = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Layout extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBarMenu />
            <FlatButtonIcon />
            <RaisedButton
              label="Undo" primary={true}
              style={style.undoButton} onTouchTap={() => {
                alert('You pressed me!');
              }}/>
          <br />
          <br />
          <Board />
          <PaperExampleSimple />

          <div>
              <FloatingActionButton
                zDepth={2} style={style.fab}
                onTouchTap={() => { alert('You pressed me!'); }}>
                <ContentAdd />
              </FloatingActionButton>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Layout;
