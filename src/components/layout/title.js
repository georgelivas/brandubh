import React, { PropTypes } from 'react';
import style from './style';

const Title = ({ winner }) => (
  <div style={style.paperTitle}>
    <h1>BRANDUBH</h1>
    <h3 style={{ marginTop: '0px' }} >{ winner }</h3>
  </div>
);
Title.propTypes = {
  winner: PropTypes.string,
};

export default Title;
