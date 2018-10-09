import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Radium, { StyleRoot } from 'radium';
import { DatePicker as MaterialDatePicker } from 'material-ui';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { styles } from './DatePicker.css';

class DatePicker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: props.date,
    };
  }

  selectDate(date) {
    const { onSelection } = this.props;
    this.setState({ date }, () => onSelection(date));
  }

  render() {
    const { maxDate, minDate } = this.props;
    const { date } = this.state;

    return (
      <StyleRoot>
        <div style={[styles.container]} className="animated fadeIn">
          <MaterialDatePicker
            className="bottom-border"
            formatDate={d => moment(d).format('YYYY-MM-DD')}
            hintText="Tap to select a date"
            inputStyle={styles.input}
            maxDate={maxDate}
            minDate={minDate}
            onChange={(_e, d) => this.selectDate(d)}
            style={styles.datePickerContainer}
            textFieldStyle={styles.input}
            value={date}
          />
        </div>
      </StyleRoot>
    );
  }
}

DatePicker.propTypes = {
  date: PropTypes.string,
  maxDate: PropTypes.object,
  minDate: PropTypes.object,
  onSelection: PropTypes.func.isRequired,
};

DatePicker.defaultProps = {
  date: undefined,
  maxDate: null,
  minDate: moment().toDate(),
};

export default Radium(DatePicker);
