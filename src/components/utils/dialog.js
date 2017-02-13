import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

/**
 * The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
 */
export default class DialogExampleCustomWidth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.open });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => {
          this.setState({ open: false });
        }}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={() => {
          this.setState({ open: false });
        }}
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
