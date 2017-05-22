import React from 'react';
import Paper from 'material-ui/Paper';
import style from './style';
import PlayerTabs from './tabs';

const Background = () => (
  <div>
    <Paper style={style.background} zDepth={5} />
    <PlayerTabs />
  </div>
);

export default Background;
