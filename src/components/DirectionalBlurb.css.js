import { black, white } from 'material-ui/styles/colors';

const styles = {
  directionalBlurbContainer: {
    display: 'inline-block',
    marginBottom: 10,
    marginTop: 10,
  },
  directionalBlurbStyle: {
    alignItems: 'center',
    backgroundColor: '#e1eafe',
    borderRadius: 60,
    color: black,
    display: 'flex',
    fontSize: 15,
    marginBottom: 20,
    marginLeft: -10,
    marginRight: -10,
    textAlign: 'left',
  },
  directionalBlurbText: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  docContainer: {
    backgroundColor: white,
    borderRadius: '50%',
    display: 'flex',
    height: 90,
    justifyContent: 'center',
    marginBottom: 8,
    marginLeft: 10,
    marginTop: 8,
    overflow: 'hidden',
    position: 'relative',
    width: 90,
  },
  doctorImage: {
    alignSelf: 'center',
    height: 100,
  },
};

export default styles;
