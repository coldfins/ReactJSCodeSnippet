import { connect } from 'react-redux';
import Conditions from './Conditions';
import { fetchConditions } from '../../store/actions/conditions';

const mapStateToProps = ({ conditions }) => ({
  conditions: conditions.conditions,
  processing: conditions.processing,
});

const mapDispatchToProps = dispatch => ({
  getConditions: () => dispatch(fetchConditions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Conditions);
