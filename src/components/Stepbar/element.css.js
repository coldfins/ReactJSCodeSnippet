import { grey400, grey600, white } from 'material-ui/styles/colors';

const styles = {
  centerContainer: {
    marginLeft: 10,
    marginTop: 10,
    width: '50%',
  },
  container: {
    backgroundColor: grey600,
    height: 64,
    margin: 4,
  },
  leftButton: {
    backgroundColor: white,
    border: 'none',
    color: grey600,
    float: 'left',
    fontSize: 17,
    fontWeight: 400,
  },
  leftContainer: {
    float: 'left',
    marginLeft: 4,
    marginTop: 4,
  },
  leftSelectedContainer: {
    float: 'left',
    marginLeft: -7,
    marginTop: 0,
  },
  rightButton: {
    backgroundColor: white,
    border: 'none',
    color: grey600,
    float: 'right',
    fontSize: 17,
    fontWeight: 400,
  },
  rightContainer: {
    float: 'right',
    marginRight: 4,
    marginTop: 4,
  },
  rightSelectedContainer: {
    float: 'right',
    marginRight: -7,
    marginTop: 0,
  },
};

const styleEnabled = {
  icon: {
    color: grey600,
    display: 'inline-block',
    fontSize: 19,
    fontWeight: 400,
  },
  text: {
    color: grey600,
    fontSize: 17,
    fontWeight: 400,
  },
};

const styleDisabled = {
  icon: {
    color: grey400,
    fontSize: 19,
    fontWeight: 400,
  },
  text: {
    color: grey400,
    fontSize: 17,
    fontWeight: 400,
  },
};

export { styles, styleEnabled, styleDisabled };
