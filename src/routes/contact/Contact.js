import _ from 'lodash';
import React, { PureComponent } from 'react';
import Radium, { StyleRoot } from 'radium';
import PropTypes from 'prop-types';
import { FlatButton, TextField } from 'material-ui';
import Loading from '../../components/Loading';
import {} from '../../services/analytics';
import styles from './Contact.css';
import validations from '../../helpers/validation';

class Contact extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: '',
      loading: false,
      name: '',
      nextable: false,
      phone: '',
      phoneError: '',
    };
  }

  componentWillMount() {
    if (window.analytics) {
      window.analytics.page('Contact Form');
    }
  }

  contactFormValid = (name, email, phone) => {
    const emailValid = _.isEmpty(email) ? false : validations.email.test(email);
    const phoneValid = _.isEmpty(phone) ? false : validations.phoneNumber.test(phone);

    return !_.isEmpty(name) && emailValid && phoneValid;
  };

  handleEmailChange = (e) => {
    const { name, phone } = this.state;
    this.setState({
      email: e.target.value,
      nextable: this.contactFormValid(name, e.target.value, phone),
    });
  };

  handleNameChange = (e) => {
    const { email, phone } = this.state;
    this.setState({
      name: e.target.value,
      nextable: this.contactFormValid(e.target.value, email, phone),
    });
  };

  handleNoteChange = (e) => {
    this.setState({ note: e.target.value });
  };

  handlePhoneChange = (e) => {
    const { name, email } = this.state;
    this.setState({
      nextable: this.contactFormValid(name, email, e.target.value),
      phone: e.target.value,
    });
  };

  submit = () => {
    const {
      patient, location, updatePatient, schedule, history,
    } = this.props;
    const {
      name, email, phone, note,
    } = this.state;

    window.analytics.track('Contact Submit');
    if (!this.contactFormValid(name, phone)) {
      const emailValid = validations.email.test(email);
      const phoneValid = validations.phoneNumber.test(phone);
      this.setState({
        emailError: emailValid ? '' : 'Invalid email address',
        phoneError: phoneValid ? '' : 'Invalid phone number',
      });
    } else {
      const [firstName, lastName] = name.split(' ');
      const patientData = {
        _id: patient._id,
        email,
        firstName,
        lastName,
        phone,
      };
      const scheduleData = {
        condition: _.isNil(location.state.condition)
          ? null
          : location.state.condition,
        note,
        treatment: _.isNil(location.state.treatment)
          ? null
          : location.state.treatment,
      };

      this.setState({ loading: true });
      updatePatient(patientData).then(() => {
        schedule(patient, scheduleData);
      }).then(() => {
        this.setState({ loading: false }, () => history.push('/medical-help'));
      });
    }
  };

  render() {
    const { history } = this.props;
    const {
      loading, name, phoneError, phone, emailError, email, note, nextable,
    } = this.state;
    return (
      <StyleRoot>
        <div style={[styles.mainContainer]} className="animated fadeIn">
          <Loading
            message="Submitting contact information to clinic"
            loading={loading}
          />

          <div style={styles.innerContainer}>
            <div style={styles.titleText}>
              Please provide your contact information so we can book a visit to our clinic for you
            </div>

            <div style={styles.inputContainer}>
              <TextField
                ref={(c) => { this.nameInput = c; }}
                hintText="Name"
                autoCapitalize="words"
                style={styles.input}
                onChange={this.handleNameChange}
                underlineShow={false}
                value={name}
                inputStyle={styles.color}
              />

              <TextField
                errorText={phoneError}
                errorStyle={styles.errorText}
                hintText="Phone Number"
                inputMode="numeric"
                key="phoneInput"
                onChange={this.handlePhoneChange}
                ref={(i) => { this.phoneInput = i; }}
                style={styles.input}
                type="tel"
                underlineShow={false}
                value={phone}
                inputStyle={styles.color}
              />

              <TextField
                errorText={emailError}
                errorStyle={styles.errorText}
                hintText="Email Address"
                key="emailInput"
                onChange={this.handleEmailChange}
                ref={(i) => { this.emailInput = i; }}
                style={styles.input}
                underlineShow={false}
                value={email}
                inputStyle={styles.color}
              />

              <TextField
                ref={(c) => { this.noteInput = c; }}
                hintText="Note"
                hintStyle={styles.noteHint}
                autoCapitalize="words"
                style={styles.input}
                onChange={this.handleNoteChange}
                underlineShow={false}
                value={note}
                textareaStyle={styles.color}
                maxLength={400}
                multiLine
                rows={4}
              />

              <div style={styles.terms}>
                By submitting, you accept our&nbsp;
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    // eslint-disable-next-line max-len
                    href="https://docs.google.com/document/d/1VkFEFEoRcfrbYENRyuL_lsRExa67-w6fFC01IrwKog4"
                  >
                    Terms and Conditions
                  </a>
                  &nbsp;and&nbsp;
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    // eslint-disable-next-line max-len
                    href="https://docs.google.com/document/d/1t6YyvZaUxLUaJUUXXiOa0kxil2ifLeWYvbBnFtFHpsY"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.seperator} />

          <div style={styles.bottomContainer}>
            <div style={styles.buttonBack}>
              <FlatButton
                primary
                label="Back"
                onTouchTap={() => history.push('/directions')}
                style={styles.backButton}
              />
            </div>

            <div style={styles.buttonNext}>
              <FlatButton
                primary
                disabled={!nextable}
                label="Submit"
                onTouchTap={() => this.submit()}
                style={nextable ? styles.payButtonStyle : styles.payButtonDisabled}
              />
            </div>
          </div>
        </div>
      </StyleRoot>
    );
  }
}

Contact.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  patient: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }).isRequired,
  schedule: PropTypes.func.isRequired,
  updatePatient: PropTypes.func.isRequired,
};

export default Radium(Contact);
