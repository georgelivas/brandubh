import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import {
  Board,
  Button,
} from './components';

import { board } from './libs/brandubh/index.js';

import './App.css';

const style = {
    marginRight: 20,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Brandubh"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
          <Board board={board.board} />
          <div>
            <FloatingActionButton zDepth={2} style={style} >
              <ContentAdd />
            </FloatingActionButton>

          </div>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
