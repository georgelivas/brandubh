let React = require('react');

let MobileTearSheet = React.createClass({

  propTypes: {
    height: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      height: 260
    };
  },

  render() {

    let styles = {
      root: {
        float: 'right',
        marginTop: 85,
        marginBottom: 24,
        marginRight: 100,
        marginLeft: 20,
        width: 200,
        position: 'fixed',
      },

      container: {
        border: 'solid 1px #d9d9d9',
        height: this.props.height,
        overflow: 'hidden'
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

});

module.exports = MobileTearSheet;
