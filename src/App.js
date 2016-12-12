import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import {orange500, cyan500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';


import {
  Board,
  Button,
} from './components';

import { board } from './libs/brandubh/index.js';

import './App.css';

injectTapEventPlugin();

const style = {
    marginRight: 20,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

const textStyle = {
    marginRight: 20,
    top: 80,
    right: 20,
    bottom: 'auto',
    left: 'auto',
    position: 'fixed',
    color: 'white',

    underlineStyle: {
    borderColor: orange500,
    },
    floatingLabelStyle: {
      color: orange500,
    },
    floatingLabelFocusStyle: {
      color: cyan500,
    },
};

const buttonStyle = {
    marginRight: 20,
    top: 160,
    right: 20,
    bottom: 'auto',
    left: 'auto',
    position: 'fixed',
    color: 'white',

};

const TextFieldExampleSimple = () => (
  <div>
    <TextField
      zDepth={2} style={textStyle}
      floatingLabelText="Enter your Name"
      floatingLabelStyle={textStyle.floatingLabelStyle}
      floatingLabelFocusStyle={textStyle.floatingLabelFocusStyle}
    /><br />
    <br />
  </div>
  );

  const RaisedButtonExampleSimple = () => (
  <div>
    <RaisedButton label="Submit" primary={true}  style={buttonStyle} onTouchTap={() => { alert('You pressed me!'); }}/>
    <br />
    <br />
  </div>
);

var Content = React.createClass({

    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function() {
        return {
            textFieldValue: ''
        };
    },

    render: function() {
        return (
            <div>
                <TextField valueLink={this.linkState('textFieldValue')} />
            </div>
        )
    }

});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Brandubh"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <TextFieldExampleSimple className="enterName"/>
            <RaisedButtonExampleSimple />
          <Board board={board.board} />
          <div>
            <FloatingActionButton
              zDepth={2} style={style}
              onTouchTap={() => { alert('You pressed me!'); }}>
              <ContentAdd />
            </FloatingActionButton>

          </div>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
