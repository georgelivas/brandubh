import React, { PropTypes } from 'react';

class MobileTearSheet extends React.Component {

  propTypes = {
    height: PropTypes.number,
    children: PropTypes.node,
  };

  defaultProps = {
    height: 260,
  };

  render() {
    const styles = {
      root: {
        float: 'center',
        marginTop: 10,
        marginBottom: 14,
        marginRight: 'auto',
        marginLeft: 200,
        width: 'auto',
        minWidth: 200,
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
      },

      container: {
        border: 'solid 1px #d9d9d9',
        height: this.props.height,
        overflow: 'hidden',
      },

    };

    return (
      <div style={styles.root}>
        <div style={styles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MobileTearSheet;