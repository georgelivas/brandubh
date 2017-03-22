import React from 'react';
import { connect } from 'react-redux';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Help from 'material-ui/svg-icons/action/help';
import { white } from 'material-ui/styles/colors';
import HelpRules from './help-rules';
import style from './style';

let open = true;
const FloatingButton = () => (

  <FloatingActionButton
    zDepth={5} style={style.fab}

  >
    <Help color={white} />
    <HelpRules open={open} />
  </FloatingActionButton>
);

export default connect(() => ({ }))(FloatingButton);
