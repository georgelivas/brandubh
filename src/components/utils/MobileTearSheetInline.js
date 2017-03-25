import React, { PropTypes } from 'react';

const styles = {
  root: {
    margin: '-30px auto 14px auto',
    width: '640px',
    minWidth: '640px',
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },

  container: {
    border: 'solid 1px #d9d9d9',
    height: '50px',
    overflow: 'hidden',
    margin: '0 auto 0 auto',
  },

};

const MobileTearSheet = ({ children }) => (
  <div style={styles.root}>
    <div style={styles.container}>
      {children}
    </div>
  </div>
);

MobileTearSheet.propTypes = {
  children: PropTypes.node,
};

export default MobileTearSheet;
