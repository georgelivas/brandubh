import { orange500 } from 'material-ui/styles/colors';

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
  icon: {
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
  paper: {
    height: 65,
    width: '100%',
    margin: '0 auto  0 auto',
    textAlign: 'center',
    opacity: '0.9',
  },
  startGame: {
    width: 550,
    height: 40,
    margin: 'auto',
    textAlign: 'center',
    fontFamily: 'Play, sans-serif',
    position: 'relative',
    bottom: 140,
    right: 25,
  },
  paperTitle: {
    WebkitTransition: 'all',
    msTransition: 'all',
    color: 'white',
    fontFamily: 'Iowan Old Style',
    fontSize: 30,
    marginBottom: 0,
  },
  checkButton: {
    marginTop: 20,
    marginRight: 30,
    marginBottom: 16,
    display: 'flex',
    width: '50%',
  },
  playerRegistration: {
    width: '100%',
    height: 300,
    margin: 'auto',
    position: 'relative',
    top: 5,
  },
  rules: {
    h1: {
      color: 'white',
    },
    p: {
      margin: '0 0 100px 0',
    },
  },
  logo: {
    paddingTop: '10px',
    paddingBottom: '10px',
    width: '400px',
  },
  ruleImg: {
    width: 300,
  },
  ruleImgSmall: {
    width: 100,
  },
  ruleImgMedium: {
    width: 200,
    paddingRight: 10,
  },
  ruleImgRed: {
    width: 100,
    paddingRight: 40,
  },
};

export default style;
