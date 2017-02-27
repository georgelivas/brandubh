import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import style from './style';
import { actions } from '../../redux-mvc';

const PlayerRegistration = ({ dispatch }) => (
  <div
    style={{
      width: '100%',
      margin: 'auto',
      position: 'relative',
      bottom: 250,
    }}
  >
    <TextField
      style={{ width: '90%' }}
      errorText="This field is required."
      floatingLabelText="Grey Player Name"
    />
    <TextField
      style={{ width: '90%' }}
      errorText="This field is required."
      floatingLabelText="Red Player Name"
    />

    <RaisedButton
      label="Start Game"
      labelStyle={{ fontSize: '33px', color: 'white' }}
      primary
      style={style.startGame}
      onTouchTap={() => dispatch(actions.newGame())}
    />
  </div>
);
PlayerRegistration.propTypes = {
  dispatch: PropTypes.func,
};

export default connect((state) => ({
  gameNotStarted: !state.board,
}))(PlayerRegistration);
