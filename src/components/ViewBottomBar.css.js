import { white } from 'material-ui/styles/colors';

const styles = {
  bottom: {
    backgroundColor: white,
    marginTop: 20,
  },
  container: {
    WebkitFlexDirection: 'column',
    alignItems: 'center',
    backgroundColor: white,
    display: '-ms-flexbox',
    display: '-webkit-flex', // eslint-disable-line no-dupe-keys
    display: 'flex', // eslint-disable-line no-dupe-keys
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: white,
  },
  row: {
    '@media (min-width: 360px)': {
      width: '90%',
    },
    '@media (min-width: 600px)': {
      width: '30%',
    },
    width: '100%',
  },
};

export default styles;
