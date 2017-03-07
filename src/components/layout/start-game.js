import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import style from './style';
import { actions } from '../../redux-mvc';

const StartGameButton = ({ dispatch }) => (
  <RaisedButton
    label="Start Game"
    labelStyle={{ fontSize: '33px', color: 'white' }}
    primary
    style={style.startGame}
    onTouchTap={() => dispatch(actions.newGame())}
  />
);
StartGameButton.propTypes = {
  dispatch: PropTypes.func,
};

export default connect(() => ({
}))(StartGameButton);
