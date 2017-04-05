import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: '10 0 400 0',
};

const DownloadButton = () => (
  <div>
    <RaisedButton label="Full width" fullWidth secondary style={style} />
  </div>
);

export default DownloadButton;
