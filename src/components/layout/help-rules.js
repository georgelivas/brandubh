import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Help from 'material-ui/svg-icons/action/help';
import { white } from 'material-ui/styles/colors';

import style from './style';
import Rules from './rules';

export default class HelpRules extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <FloatingActionButton
          zDepth={5} style={style.fab}
          onTouchTap={this.handleOpen}
        >
          <Help color={white} />
        </FloatingActionButton>
        <Dialog
          title="How to play.."
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <Rules />
        </Dialog>
      </div>
    );
  }
}
