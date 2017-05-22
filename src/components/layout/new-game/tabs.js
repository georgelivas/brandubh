import React, { PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import PlayerRegistration from './player-registration';
import style from './style';

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
  };

  render() {
    return (
      <div style={style.tabs}>
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
  dispatch: PropTypes.func,
};

export default PlayerTabs;
