import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { actions } from '../../redux-mvc';
import { connect } from 'react-redux';


const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

class WinnerDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
      winner: this.winner,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.open });
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
          dispatch(actions.newGame());
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

export default connect((state) => ({
  gameNotStarted: !state.board,
  winner: state.winner,
}))(WinnerDialog);
