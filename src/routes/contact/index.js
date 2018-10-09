import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { schedule, updatePatient } from '../../store/actions/patients';
import Contact from './Contact';

const matchStateToProps = state => ({
  patient: JSON.parse(localStorage.getItem('patient')) || state.patients.patient,
});

const matchDispatchToProps = dispatch => ({
  schedule: (patient, scheduleData) => dispatch(schedule(patient, scheduleData)),
  updatePatient: data => dispatch(updatePatient(data)),
});

export default withRouter(connect(matchStateToProps, matchDispatchToProps)(Contact));
