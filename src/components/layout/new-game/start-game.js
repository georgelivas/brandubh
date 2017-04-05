import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DownloadLink from 'react-download-link';
import RaisedButton from 'material-ui/RaisedButton';

import style from './style';
import { actions } from '../../../redux-mvc';

const StartGameButton = ({ dispatch }) => (
  <div>
    <RaisedButton
      label="Start Game"
      labelStyle={{ fontSize: '33px', color: 'white' }}
      primary
      fullWidth
      onTouchTap={() => dispatch(actions.newGame())}
    />
    <p><a href="./Brandubh.dmg" download target="_blank">test pdf</a></p>
    <a href="src/components/layout/new-game/Brandubh.dmg">Link</a>
    <DownloadLink
      filename="./Brandubh.dmg"
      label="Save to disk"
    >
      <RaisedButton
        label="Download -For Mac"
        fullWidth
        secondary
        onTouchTap={() => window.open('file.doc')}
      />
    </DownloadLink>

  </div>
);
StartGameButton.propTypes = {
  dispatch: PropTypes.func,
};

export default connect(() => ({
}))(StartGameButton);
