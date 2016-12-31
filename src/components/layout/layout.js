import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import {orange500, cyan500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import { fullWhite } from 'material-ui/styles/colors';

import {
  Board,
} from '../../components';

import '../../App.css';

import style from './style';
import { muiTheme } from '../../styles';

const TextFieldSimple = () => (
  <div>
    <TextField
      className='textField'
      zDepth={2} style={style.text}
      floatingLabelText="Enter your Name"
      floatingLabelStyle={style.text.floatingLabel}
      floatingLabelFocusStyle={style.text.floatingLabelFocus}
      textareaStyle={{color: 'white'}}
    /><br />
    <br />
  </div>
  );

const RaisedButtonSimple = () => (
  <div>
    <RaisedButton
      label="Submit" primary={true}
      style={style.button} onTouchTap={() => {
        alert('You pressed me!');
      }}/>
    <br />
    <br />
  </div>
);



const FlatButtonIcon = () => (
  <div>
    <FlatButton
      icon={<ActionAndroid color={fullWhite}/>}
      style={style.icon}
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

        <div>
          <AppBar
            title={<span style={style.title} >Brandubh</span>}
            className='pageTitle'
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleTouchTap} >
            <FlatButton label="Submit" style={style.appBarButton}
              onTouchTap={() => { alert('You pressed me!'); }}/>
            <TextFieldSimple className="enterName" />

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
    );
  }
}

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
