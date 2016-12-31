import { orange500, cyan500 } from 'material-ui/styles/colors';

const style = {
  title: {
    color: 'white',
  },
  fab: {
      marginRight: 20,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
  },
  text: {
      marginRight: 20,
      marginTop: 0,
      right: 120,
      bottom: 'auto',
      left: 'auto',
      position: 'absolute',
      color: 'white',

      underline: {
      borderColor: 'white',
      },
      floatingLabel: {
        color: 'white',
      },
      floatingLabelFocus: {
        color: orange500,
      },
  },
  icon:  {
    margin: 12,
  },
  button: {
      marginRight: 20,
      top: 160,
      right: 20,
      bottom: 'auto',
      left: 'auto',
      position: 'absolute',
      color: 'white',
  },
  undoButton: {
      marginRight: 20,
      top: 200,
      right: 'auto',
      bottom: 'auto',
      left: 20,
      position: 'absolute',
      color: 'white',
  },
  appBarButton: {
    marginRight: 20,
    top: 30,
  },
};

export default style;
