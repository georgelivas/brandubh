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
import MobileTearSheetInline from './MobileTearSheetInline';
import Machine from '../../libs/brandubh/machine';

const InlineListMenu = ({ winner, dispatch }) => (
  <MobileTearSheetInline >
    <List
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
      }}
    >
      <ListItem
        primaryText="Undo"
        disabled={!!winner}
        rightIcon={
          <Undo color={white} />
        }
        onTouchTap={() => (!winner && dispatch(actions.undo()))}

        style={{ opacity: (winner ? 0.2 : 1) }}
      />
      <ListItem
        primaryText="New Game"
        rightIcon={
          <VideogameAsset color={white} />
        }
        onTouchTap={() => dispatch(actions.newGame())}
      />
      <ListItem
        primaryText="Hint" rightIcon={<Error color={white} />}
        onTouchTap={() => console.log(Machine.getRandomIntInclusive(1, 7))}
      />
      <ListItem
        primaryText="Start Menu"
        rightIcon={<Menu color={white} />}
        onTouchTap={() => dispatch(actions.gameNotStarted())}
      />
      <ListItem
        primaryText="Help"
        rightIcon={<Help color={white} />}
      />
    </List>
  </MobileTearSheetInline>
);
InlineListMenu.propTypes = {
  dispatch: PropTypes.func,
  winner: PropTypes.string,
};
console.log(Machine.coordinates);

export default connect((state) => ({
  gameNotStarted: !state.board,
  winner: state.winner,
}))(InlineListMenu);
