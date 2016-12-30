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

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import { fullWhite } from 'material-ui/styles/colors';


import { actions, store } from './redux-mvc';

import {
  Board,
} from './components';



import './App.css';

injectTapEventPlugin();

const titleStyle = {
  color: 'white',
};

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
    marginTop: 0,
    right: 120,
    bottom: 'auto',
    left: 'auto',
    position: 'absolute',
    color: 'white',

    underlineStyle: {
    borderColor: 'white',
    },
    floatingLabelStyle: {
      color: 'white',
    },
    floatingLabelFocusStyle: {
      color: orange500,
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

const iconStyle = {
  margin: 12,
};

const buttonStyle = {
    marginRight: 20,
    top: 160,
    right: 20,
    bottom: 'auto',
    left: 'auto',
    position: 'absolute',
    color: 'white',

};

const undoButtonStyle = {
    marginRight: 20,
    top: 200,
    right: 'auto',
    bottom: 'auto',
    left: 20,
    position: 'absolute',
    color: 'white',

};

const AppBarButtonStyle = {
  marginRight: 20,
  top: 30,

}

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



const FlatButtonExampleIcon = () => (
  <div>
    <FlatButton
      icon={<ActionAndroid color={fullWhite}/>}
      style={iconStyle}
    />
  </div>
);

class AppBarMenu extends React.Component {

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

      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <AppBar
            title={<span style={titleStyle} >Brandubh</span>}
            className='pageTitle'
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleTouchTap} >
            <FlatButton label="Submit" style={AppBarButtonStyle }
              onTouchTap={() => { alert('You pressed me!'); }}/>
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
              <TextFieldExampleSimple className="enterName" />
            </MuiThemeProvider>

          </AppBar>

          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              <MenuItem primaryText="Undo" onTouchTap={() => { alert('You pressed me!'); }} />
              <MenuItem primaryText="New Game" onTouchTap={() => {
                alert(actions.newGame('George', 'George'));
                store.dispatch(actions.newGame('George', 'George')); }} />
              <MenuItem primaryText="Edit Name" onTouchTap={() => { alert('You pressed me!'); }} />
            </Menu>
          </Popover>
        </div>
      </MuiThemeProvider>

    );
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
        <AppBarMenu />
            <FlatButtonExampleIcon />
            <RaisedButton
              label="Undo" primary={true}
              style={undoButtonStyle} onTouchTap={() => {
                alert('You pressed me!');
              }}/>
            <br />
            <br />
            <Board />
          <div>
          <i className="material-icons">laptop_mac</i>
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
