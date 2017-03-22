import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';

import style from './style';
import Title from './title';
import PlayerTabs from './tabs';
import StartGameButton from './start-game';
import HelpRules from './help-rules';

const WelcomePaper = () => (
  <div style={{ width: '100%', height: '100%', margin: '200px auto 0 auto' }}>
    <Paper style={style.paper} zDepth={5}>
      <Title />
      <PlayerTabs />
      <StartGameButton />
    </Paper>
    <HelpRules />
  </div>
);
WelcomePaper.propTypes = {
  winner: PropTypes.string,
};

export default connect((state) => ({
  gameNotStarted: !state.board,
  winner: state.winner,
}))(WelcomePaper);
