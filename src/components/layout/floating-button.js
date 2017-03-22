import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Help from 'material-ui/svg-icons/action/help';
import { white } from 'material-ui/styles/colors';

import { actions } from '../../redux-mvc';
import style from './style';

const FloatingButton = ({ dispatch }) => (
  <FloatingActionButton
    zDepth={5} style={style.fab}
    onTouchTap={() => { dispatch(actions.undo()); }}
  >
    <Help color={white} />
  </FloatingActionButton>
);
FloatingButton.propTypes = {
  dispatch: PropTypes.func,
};

export default connect(() => ({ }))(FloatingButton);
