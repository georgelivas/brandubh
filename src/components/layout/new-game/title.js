import React from 'react';
import style from './style';
import { logo } from '../images';

const Title = () => (
  <div>
    <img src={logo} alt={'Brandubh'} style={style.logo} />
  </div>
);

export default Title;
