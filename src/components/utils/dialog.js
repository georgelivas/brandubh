import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import actions from '../../redux-mvc';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

export default class DialogExampleCustomWidth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
      dispatch: props.dispatch,
      winner: props.winner,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.open });
    this.setState({ dispatch: nextProps.dispatch });
  }

  render() {
    let winner;
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={() => {
          this.setState({ open: false });
        }
        }
      />,

      <FlatButton
        label="Play again"
        primary={true}
        onTouchTap={() => {
          this.setState({ open: false });
          console.log('=====================', winner);
          this.dispatch(actions.newGame());
          console.log(this.winner);
        }
        }
      />,
    ];

    return (
      <Dialog
        title="Dialog With Custom Width"
        actions={actions}
        modal={true}
        contentStyle={customContentStyle}
        open={this.state.open}
      >
        This dialog spans the entire width of the screen.
      </Dialog>
    );
  }
}
