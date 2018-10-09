import _ from 'lodash';
import { connect } from 'react-redux';
import { getDiagnosis } from '../../store/actions/pain';
import Condition from './Condition';

const mapDispatchToProps = (dispatch, ownProps) => ({
  getDiagnosis: patientId => dispatch(getDiagnosis(ownProps.match.params.id, patientId)),
});

const mapStateToProps = (state, props) => {
  const { match } = props;
  const conditions = JSON.parse(localStorage.getItem('conditions')) || state.pain.conditions;
  const filteredConditions = _.filter(conditions, c => c.id !== match.params.id);
  const condition = _.find(conditions, c => c.id === match.params.id);

  return {
    condition,
    conditions: filteredConditions,
    diagnosis: state.pain.diagnosis,
    errorMessage: state.pain.errorMessage,
    patient: JSON.parse(localStorage.getItem('patient')) || state.patients.patient,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Condition);
