import { grey600 } from 'material-ui/styles/colors';

const picker = {
  dateInput: {
    borderColor: '#1B4AE8',
    borderWidth: 0,
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 2,
  },
  dateText: {
    color: grey600,
    fontSize: 20,
  },
  placeholderText: {
    color: grey600,
    fontSize: 20,
  },
};

const styles = {
  container: {
    marginTop: 40,
    width: '100%',
  },
  date: {
    width: '100%',
  },
  datePickerContainer: {
    textAlign: 'center',
  },
  input: {
    textAlign: 'center',
  },
};

export { styles, picker };
