import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { actions } from '../../redux-mvc';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

class WinnerDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      winner: props.winner,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.open });
    this.setState({ winner: nextProps.winner });
  }

  render() {
    const action = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={() => this.setState({ open: false })}
      />,
      <FlatButton
        label="Play again"
        primary={true}
        onTouchTap={() => {
          this.setState({ open: false });
          this.props.dispatch(actions.newGame());
        }}

      />,
    ];

    // const winnerName = winner.charAt(0).toUpperCase() + winner.slice(1);
    const title = this.props.winner + ' is the winner!';

    return (
      <Dialog
        title={title}
        actions={action}
        modal={true}
        contentStyle={customContentStyle}
        open={this.state.open}
      >
        Press close to remain on game or hit play again for one more round.
      </Dialog>
    );
  }
}

export default connect(({ board, winner }) => ({
  gameNotStarted: !board,
  winner,
}))(WinnerDialog);
