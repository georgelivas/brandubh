import React, { Component } from 'react'
import { Drawer, AppBar, MenuItem} from 'material-ui'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Route, Router } from 'react-router'



export default class Header extends Component  {

  constructor(props){
    super(props);
    this.state = {open:false};
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }


  handleToggle() {
    this.setState({open: !this.state.open});
    console.log("open")
   }
  handleClose() { this.setState({open: false}); }
        render() {

            return (
                <div>
                <Drawer
                docked={false}
                open={this.state.open}>
                  <MenuItem onTouchTap={this.handleClose}>Menu Item 1</MenuItem>
                  <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                  <MenuItem onTouchTap={this.handleClose}>Menu Item 3</MenuItem>
                </Drawer>

                <AppBar   title="App Bar Example"
            isInitiallyOpen={true} onLeftIconButtonTouchTap={this.handleToggle} onLeftIconButtonClick={this.handleToggle} />
                </div>
            );
        }
    }

    Header.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Header;
