import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import style from './style';
import Title from './title';
import { actions } from '../../redux-mvc';

const WelcomePaper = ({ winner, dispatch }) => (
  <div style={{ width: '100%', height: '100%', margin: '200px auto 0 auto' }}>
    <Paper style={style.paper} zDepth={5}>
      <Title winner={winner} />
      <RaisedButton
        label="Start Game"
        labelStyle={{ fontSize: '33px', color: 'white' }}
        primary
        style={style.startGame}
        onTouchTap={() => {
          dispatch(actions.newGame());
        }
        }
      />
    </Paper>
  </div>
);
WelcomePaper.propTypes = {
  dispatch: PropTypes.func,
  winner: PropTypes.string,
};

export default connect((state) => ({
  gameNotStarted: !state.board,
  winner: state.winner,
}))(WelcomePaper);
