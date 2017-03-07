import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';

import style from './style';
import Title from './title';
import PlayerTabs from './tabs';

const WelcomePaper = ({ winner }) => (
  <div style={{ width: '100%', height: '100%', margin: '200px auto 0 auto' }}>
    <Paper style={style.paper} zDepth={5}>
      <Title winner={winner} />
      <PlayerTabs />
    </Paper>
  </div>
);
WelcomePaper.propTypes = {
  winner: PropTypes.string,
};

export default connect((state) => ({
  gameNotStarted: !state.board,
  winner: state.winner,
}))(WelcomePaper);
