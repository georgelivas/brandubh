import React, { PropTypes } from 'react';
import style from './style';

const Title = ({ winner }) => (
  <div style={style.paperTitle}>
    <h1 style={{ marginBottom: 0 }}>BRANDUBH</h1>
  </div>
);
Title.propTypes = {
  winner: PropTypes.string,
};

export default Title;
