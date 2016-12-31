import TextField from 'material-ui/TextField';
import { orange500, cyan500 } from 'material-ui/styles/colors';

const textStyle = {
    marginRight: 20,
    marginTop: 0,
    right: 120,
    bottom: 'auto',
    left: 'auto',
    position: 'absolute',
    color: 'white',

    underlineStyle: {
    borderColor: 'white',
    },
    floatingLabelStyle: {
      color: 'white',
    },
    floatingLabelFocusStyle: {
      color: orange500,
    },
};

const TextField = () => (
  <div>
    <TextField
      className='textField'
      zDepth={2} style={textStyle}
      floatingLabelText="Enter your Name"
      floatingLabelStyle={textStyle.floatingLabelStyle}
      floatingLabelFocusStyle={textStyle.floatingLabelFocusStyle}
      textareaStyle={{color: 'white'}}
    /><br />
    <br />
  </div>
  );

  export default TextField;
