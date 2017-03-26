import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import { selectGameMode } from '../../../redux-mvc/actions';
import CheckButton from './check-box';
import style from './style';

const PlayerRegistration = ({
  singleBox,
  dispatch,
}) => {
  const handlePlayerVsMachineName = (event) => {
    dispatch(selectGameMode({
      isPlayerVsPlayer: false,
      playerVsMachine: {
        playerName: event.target.value,
      },
    }));
  };

  const handlePlayerVsPlayerRedName = (event) => {
    dispatch(selectGameMode({
      isPlayerVsPlayer: true,
      playerVsPlayer: {
        redPlayerName: event.target.value,
      },
    }));
  };

  const handlePlayerVsPlayerGreyName = (event) => {
    dispatch(selectGameMode({
      isPlayerVsPlayer: true,
      playerVsPlayer: {
        greyPlayerName: event.target.value,
      },
    }));
  };

  return (
    <div style={style.playerRegistration}>
      {
        singleBox &&
        <div>
          <div>
            <CheckButton style={{ width: '90%' }} />
          </div>
          <div>
            <TextField
              onChange={handlePlayerVsMachineName}
              style={{ width: '90%' }}
              floatingLabelText="Player Name"
            />
          </div>
        </div>
      }

      {
        !singleBox &&
        <div>
          <TextField
            onChange={handlePlayerVsPlayerGreyName}
            style={{ width: '90%' }}
            floatingLabelText="Grey Player Name"
          />
          <TextField
            onChange={handlePlayerVsPlayerRedName}
            style={{ width: '90%' }}
            floatingLabelText="Red Player Name"
          />
        </div>
      }
    </div>
  );
};

PlayerRegistration.propTypes = {
  singleBox: PropTypes.bool,
  dispatch: PropTypes.func,
};

export default connect()(PlayerRegistration);
