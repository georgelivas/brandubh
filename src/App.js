import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import {orange500, cyan500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import {
  Board,
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
    position: 'absolute',
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
 // eslint-disable-next-line
const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

const buttonStyle = {
    marginRight: 20,
    top: 160,
    right: 20,
    bottom: 'auto',
    left: 'auto',
    position: 'absolute',
    color: 'white',

};

const TextFieldExampleSimple = () => (
  <div>
    <TextField
      className='textField'
      zDepth={2} style={textStyle}
      floatingLabelText="Enter your Name"
      floatingLabelStyle={textStyle.floatingLabelStyle}
      floatingLabelFocusStyle={textStyle.floatingLabelFocusStyle}
      textareaStyle={{color: 'white'}}
    /><br />
    <br />
  </div>
  );

const RaisedButtonExampleSimple = () => (
  <div>
    <RaisedButton
      label="Submit" primary={true}
      style={buttonStyle} onTouchTap={() => {
        alert('You pressed me!');
      }}/>
    <br />
    <br />
  </div>
);

const AppBarMenu = () => (
  <div>
    <AppBar
      title="Brandubh"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonTouchTap={() => { alert('You pressed me!'); }} >
      //PopoverExampleSimple.this.handleTouchTap
    </AppBar>
  </div>
);

class PopoverExampleSimple extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {

    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Click me"
        />
        <AppBar
          title="Brandubh"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleTouchTap} >
          //PopoverExampleSimple.this.handleTouchTap
        </AppBar>

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Undo" />
            <MenuItem primaryText="New Game" />
            <MenuItem primaryText="Edit Name" />
          </Menu>
        </Popover>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBarMenu />
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
              <TextFieldExampleSimple className="enterName" />
            </MuiThemeProvider>
            <PopoverExampleSimple />
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
