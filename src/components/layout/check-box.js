import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import style from './style';

const CheckButton = () => (
  <div>
    <RadioButtonGroup
      name="shipSpeed"
      labelPosition="left"
      defaultSelected="grey"
      style={{ display: 'flex' }}
      onChange={(value) => (alert(value))}
    >
      <RadioButton
        value="grey"
        label="Grey Team"
        style={style.checkButton}
      />
      <RadioButton
        value="red"
        label="Red Team"
        style={style.checkButton}
      />
    </RadioButtonGroup>
  </div>
);

export default CheckButton;
