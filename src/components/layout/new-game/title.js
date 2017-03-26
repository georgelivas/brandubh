import React from 'react';
import style from './style';
import { logo } from '../images';

const Title = () => (
  <div>
    <img src={logo} alt={'Brandubh'} style={style.logo} />
    { /* <h1 style={{ marginBottom: 0 }}>BRANDUBH</h1> */ }
  </div>
);

export default Title;
