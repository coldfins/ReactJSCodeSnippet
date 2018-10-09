import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getConditions } from '../../store/actions/pain';
import Result from './Result';

const mapDispatchToProps = dispatch => ({
  getConditions: patientId => dispatch(getConditions(patientId)),
});

const mapStateToProps = state => ({
  conditions: JSON.parse(localStorage.getItem('conditions')) || state.pain.conditions,
  errorMessage: state.pain.errorMessage,
  organization: JSON.parse(localStorage.getItem('organization')) || state.pain.organization,
  patient: JSON.parse(localStorage.getItem('patient')) || state.patients.patient,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Result));
