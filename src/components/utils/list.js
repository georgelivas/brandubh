import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { List, ListItem } from 'material-ui/List';
import { white } from 'material-ui/styles/colors';
import Undo from 'material-ui/svg-icons/content/undo';
import VideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import Error from 'material-ui/svg-icons/alert/error';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Help from 'material-ui/svg-icons/action/help';

import { actions } from '../../redux-mvc';
import MobileTearSheet from './MobileTearSheet';

const ListMenu = ({ winner, dispatch }) => (
  <MobileTearSheet >
    <List>
      <ListItem
        primaryText="Undo"
        disabled={!!winner}
        leftIcon={
          <Undo color={white} />
        }
        onTouchTap={() => (!winner && dispatch(actions.undo()))}

        style={{ opacity: (winner ? 0.2 : 1) }}
      />
      <ListItem
        primaryText="New Game"
        leftIcon={
          <VideogameAsset color={white} />
        }
        onTouchTap={() => dispatch(actions.newGame())}
      />
      <ListItem
        primaryText="Hint" leftIcon={<Error color={white} />}
      />
      <ListItem
        primaryText="Start Menu"
        leftIcon={<Menu color={white} />}
        onTouchTap={() => dispatch(actions.gameNotStarted())}
      />
      <ListItem
        primaryText="Help"
        leftIcon={<Help color={white} />}
      />
    </List>
  </MobileTearSheet>
);
ListMenu.propTypes = {
  dispatch: PropTypes.func,
  winner: PropTypes.string,
};

export default connect((state) => ({
  gameNotStarted: !state.board,
  winner: state.winner,
}))(ListMenu);
