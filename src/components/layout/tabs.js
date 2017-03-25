import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { selectGameMode } from '../../redux-mvc/actions';

import PlayerRegistration from './player-registration';

class PlayerTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
    if (value === 0) {
      this.props.dispatch(selectGameMode({
        isPlayerVsPlayer: false,
        team: 'GREY', // GREY or RED
        nameGrey: 'Giorgos',
        nameRed: 'Marvin',
      }));
    } else {
      this.props.dispatch(selectGameMode({
        isPlayerVsPlayer: true,
        nameGrey: 'Giorgos',
        nameRed: 'Marvin',
      }));
    }
  };

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Player VS Machine" value={0} />
          <Tab label="Player VS Player" value={1} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <PlayerRegistration singleBox />
          </div>
          <div>
            <PlayerRegistration />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

PlayerTabs.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(PlayerTabs);
