import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import {
  Board,
  Button,
} from './components';

import { board } from './libs/brandubh/index.js';

import './App.css';

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
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
