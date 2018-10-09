import {
  blue300,
  grey500,
  black,
  white,
} from 'material-ui/styles/colors';

const styles = {
  card: {
    borderRadius: 3,
    marginBottom: 20,
    width: '95%',
  },
  cardContainer: {
    paddingBottom: 0,
  },
  cardRow: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column',
  },
  cardSubText: {
    alignItems: 'center',
    color: black,
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
  },
  container: {
    backgroundColor: '#3487a7',
    height: window.innerHeight - 64,
  },
  description: {
    color: blue300,
    display: 'flex',
    fontSize: 14,
    marginLeft: 10,
    marginTop: 5,
  },
  footerContainer: {
    alignItems: 'center',
    bottom: 10,
    color: white,
    display: 'flex',
    fontSize: 14,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  icon: {
    height: 18,
    marginLeft: 10,
    width: 18,
  },
  image: {
    height: 50,
    marginLeft: 10,
    marginTop: 5,
    width: 50,
  },
  innerContainer: {
    '@media screen and (min-width: 500px)': /* Tablet */ {
      width: '50%',
    },
    '@media screen and (min-width: 980px)': /* Desktop */ {
      width: '30%',
    },
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    width: '95%',
  },
  mainContainer: {
    height: window.innerHeight - 104,
    overflow: 'auto',
  },
  row: {
    display: 'flex',
  },
  rowContainer: {
    marginLeft: 20,
    marginRight: 10,
    textAlign: 'left',
    width: '60%',
  },
  subText: {
    color: grey500,
    fontSize: 14,
    margin: '0 auto',
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    color: black,
    fontSize: 16,
    marginLeft: 10,
  },
  titleText: {
    color: white,
    fontSize: 20,
    fontWeight: 'bold',
    margin: '0 auto',
    padding: 20,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    marginTop: 20,
    width: '100%',
  },
};

export default styles;
