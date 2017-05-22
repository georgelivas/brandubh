import React from 'react';
import { connect } from 'react-redux';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { actions } from '../../../redux-mvc';
import style from './style';

const CheckButton = ({ dispatch }) => (
  <div>
    <RadioButtonGroup
      name="shipSpeed"
      defaultSelected="GREY"
      onChange={(event, value) => dispatch(
        actions.selectGameMode({
          isPlayerVsPlayer: false,
          playerVsMachine: {
            playerColor: value,
          },
        })
      )}
    >
      <RadioButton
        value="GREY"
        label="Grey Team"
        style={style.checkButton}
      />
      <RadioButton
        value="RED"
        label="Red Team"
        style={style.checkButton}
      />
    </RadioButtonGroup>
  </div>
);

CheckButton.propTypes = {
  dispatch: React.PropTypes.func,
};

export default connect()(CheckButton);
