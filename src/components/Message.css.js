import {
  black,
  blue200,
  blueGrey700,
  white,
} from 'material-ui/styles/colors';

const styles = {
  actionButton: {
    '@media screen and (min-width: 500px)': /* Tablet */ {
      width: '20%',
    },
    '@media screen and (min-width: 980px)': /* Desktop */ {
      width: '100%',
    },
    alignItems: 'center',
    backgroundColor: blue200,
    color: white,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 14,
    height: 50,
    justifyContent: 'center',
    weight: '90%',
    width: '100%',
  },
  actionButtonContainer: {
    '@media screen and (min-width: 500px)': /* Tablet */ {
      width: '20%',
    },
    '@media screen and (min-width: 980px)': /* Desktop */ {
      width: '100%',
    },
    bottom: 0,
    color: white,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 20,
    justifyContent: 'center',
    position: 'absolute',
    weight: '90%',
    width: '100%',
  },
  actionIcon: {
    height: 25,
    marginLeft: 20,
    width: 30,
  },
  body: {
    color: black,
    fontFamily: 'Roboto',
    fontSize: 16,
    margin: 10,
    textAlign: 'left',
  },
  container: {
    '@media screen and (min-width: 500px)': /* Tablet */ {
      height: window.innerHeight - 64,
    },
    '@media screen and (min-width: 980px)': /* Desktop */ {
      height: window.innerHeight - 64,
    },
    backgroundColor: white,
    width: '100%',
  },
  docImage: {
    '@media screen and (min-width: 500px)': /* Tablet */ {
      borderRadius: 125 / 2,
      width: 125,
    },
    '@media screen and (min-width: 980px)': /* Desktop */ {
      borderRadius: 125 / 2,
      width: 125,
    },
    height: 125,
    width: 'auto',
  },
  docInfoContainer: {
    alignItems: 'center',
    backgroundColor: '#f7f7fa',
    fontFamily: 'Roboto',
    justifyContent: 'center',
    padding: 5,
    textAlign: 'center',
  },
  header: {
    color: black,
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: 600,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    textAlign: 'left',
  },
  innerContainer: {
    width: '100%',
    zIndex: '1',
  },
  leftInnerContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  leftMessageContainer: {
    backgroundColor: '#f7f7fa',
    height: '100%',
  },
  mainContainer: {
    '@media screen and (min-width: 500px)': /* Tablet */ {
      height: '100%',
      width: '100%',
    },
    '@media screen and (min-width: 980px)': /* Desktop */ {
      height: '100%',
      width: '50%',
    },
    alignItems: 'top',
    display: 'block',
    height: window.innerHeight - 114,
    justifyContent: 'center',
    margin: '0 auto',
    overflow: 'auto',
    paddingTop: 10,
    textAlign: 'center',
    width: '100%',
  },
  message: {
    margin: 10,
    textAlign: 'left',
  },
  messageContainer: {
    height: '100%',
    width: '50%',
  },
  messageFooter: {
    '@media screen and (min-width: 500px)': /* Tablet */ {
      width: '20%',
    },
    '@media screen and (min-width: 980px)': /* Desktop */ {
      bottom: '22%',
      width: '100%',
    },
    bottom: 50,
    color: blueGrey700,
    fontSize: 12,
    position: 'fixed',
    textAlign: 'center',
    width: '100%',
  },
  name: {
    color: black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  rowContainer: {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.12)',
    height: '75%',
    margin: '10%',
  },
  specialty: {
    color: black,
    fontSize: 14,
    opacity: 0.58,
  },
  subText: {
    color: black,
    fontSize: 14,
    marginLeft: 10,
    marginRight: 10,
    opacity: 0.58,
  },
};

export default styles;
