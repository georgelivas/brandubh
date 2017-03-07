import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

import { actions } from '../../redux-mvc';

import style from './style';

const TextFieldSimple = () => (
  <div>
    <TextField
      className='textField'
      style={style.text}
      floatingLabelText="Enter your Name"
      floatingLabelStyle={style.text.floatingLabel}
      floatingLabelFocusStyle={style.text.floatingLabelFocus}
      textareaStyle={{ color: 'white' }}
    /><br />
    <br />
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
    const { dispatch } = this.props;
    return (
        <div>
          <AppBar
            title={<span style={style.title} >Brandubh</span>}
            className='pageTitle'
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleTouchTap}
          >
            <FlatButton
              label="Submit" style={style.appBarButton}
              onTouchTap={() => {
                alert('You pressed me!');
              }}
            />
            <TextFieldSimple className="enterName" />

          </AppBar>

          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              <MenuItem
                primaryText="Undo" onTouchTap={() => {
                  alert('You pressed me!');
                }}
              />
              <MenuItem
                primaryText="New Game" onTouchTap={() => {
                  dispatch(actions.newGame('George', 'George'));
                }}
              />
              <MenuItem
                primaryText="Edit Name" onTouchTap={() => {
                  alert('You pressed me!');
                }}
              />
            </Menu>
          </Popover>
        </div>
    );
  }
}

export default connect()(AppBarMenu);
