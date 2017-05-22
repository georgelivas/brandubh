import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import style from './style';

const SelectTeam = () => (
  <div>
    <h1 style={style.selectTeamTitle}>Select Team</h1>
    <RadioButtonGroup name="shipSpeed" defaultSelected="white">
      <RadioButton
        value="white"
        label="Simple"
        style={style.selectTeam}
        iconStyle={{ color: '1f1f1f' }}
      />
      <RadioButton
        value="red"
        label="Selected by default"
        style={style.selectTeam}
      />
    </RadioButtonGroup>
  </div>
);

export default SelectTeam;
