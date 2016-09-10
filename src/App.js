import React, { Component } from 'react';
import {
  Board,
  Button,
} from './components';

import { board } from './redux/modules/brandubh/index.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Brandubh</h1>
        <h2>Board</h2>
        <Button />
        <Board board={board.board} />
      </div>
    );
  }
}

export default App;
