import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import style from './style';
import { actions } from '../../redux-mvc';

const PlayerRegistration = ({ dispatch, singleBox }) => (
  <div
    style={{
      width: '100%',
      height: 400,
      margin: 'auto',
      position: 'relative',
      top: 5,
    }}
  >
    {
      singleBox &&
      <div>
        <TextField
          style={{ width: '90%' }}
          floatingLabelText="Grey Player Name"
        />
        <br />
      </div>
    }
    {
      !singleBox &&
      <div>
        <TextField
          style={{ width: '90%' }}
          floatingLabelText="Grey Player Name"
        />
        <TextField
          style={{ width: '90%' }}
          floatingLabelText="Red Player Name"
        />
      </div>
    }

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
  singleBox: PropTypes.bool,
};

export default connect((state) => ({
  gameNotStarted: !state.board,
}))(PlayerRegistration);
