import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

import CheckButton from './check-box';
import style from './style';

const PlayerRegistration = ({ singleBox }) => (
  <div
    style={style.playerRegistration}
  >
    {
      singleBox &&
      <div>
        <CheckButton style={{ width: '90%' }} />
        <TextField
          style={{ width: '90%' }}
          floatingLabelText="Grey Player Name"
        />
      </div>
    }
    {
      !singleBox &&
      <div>
        <TextField
          style={{ width: '90%' }}
          floatingLabelText="Grey Player Name"
        />
        <TextField
          style={{ width: '90%' }}
          floatingLabelText="Red Player Name"
        />
      </div>
    }
  </div>
);
PlayerRegistration.propTypes = {
  singleBox: PropTypes.bool,
};

export default PlayerRegistration;
