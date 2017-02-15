import React from 'react';

class MobileTearSheet extends React.Component {

  propTypes = {
    height: React.PropTypes.number,
  };

  defaultProps = {
    height: 260,
  };

  render() {
    const styles = {
      root: {
        float: 'right',
        marginTop: 85,
        marginBottom: 24,
        marginRight: 100,
        marginLeft: 20,
        width: 'auto',
        minWidth: 200,
        position: 'relative',
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
