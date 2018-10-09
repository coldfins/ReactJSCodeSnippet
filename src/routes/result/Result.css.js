import {
  black,
  grey600,
  red300,
  yellow600,
  yellow800,
  white,
  lightBlue200,
} from 'material-ui/styles/colors';

const styles = {
  card: {
    borderRadius: 0,
    width: '100%',
  },
  cardRow: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  conditionImg: {
    float: 'right',
    marginTop: 10,
  },
  conditionSymtoms: {
    color: lightBlue200,
    display: 'flex',
    fontSize: 14,
  },
  conditionTitle: {
    color: black,
    fontSize: 18,
    marginBottom: 5,
    marginTop: 10,
  },
  container: {
    backgroundColor: white,
    height: window.innerHeight - 104,
    overflow: 'auto',
  },
  header: {
    fontWeight: 'bold',
    height: 26,
  },
  headerText: {
    fontSize: 26,
  },
  hideContainer: {
    display: 'none',
  },
  icon: {
    marginTop: 10,
  },
  innerContainer: {
    '@media screen and (min-width: 980px)': /* Desktop */ {
      width: '40%',
    },
    margin: '0 auto',
    width: '100%',
    zIndex: '1',
  },
  next: {
    height: 20,
    width: 20,
  },
  qualifiers: {
    borderRadius: 5,
    color: white,
    display: 'inline',
    fontSize: 12,
    padding: 5,
  },
  qualifiersLeast: {
    backgroundColor: yellow600,
  },
  qualifiersMost: {
    backgroundColor: red300,
  },
  qualifiersPossible: {
    backgroundColor: yellow800,
  },
  row: {
    marginBottom: -8,
    overflow: 'auto',
  },
  subText: {
    color: grey600,
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    color: black,
    fontSize: 22,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  treatmentText: {
    marginRight: 10,
  },
  viewAllContainer: {
    alignItems: 'center',
    color: lightBlue200,
    display: 'flex',
    fontSize: 20,
    justifyContent: 'center',
    margin: 20,
  },
};

export default styles;
