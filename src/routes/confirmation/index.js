import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearState } from '../../store/actions/pain';
import Confirmation from './Confirmation';

const matchDispatchToProps = dispatch => ({
  clearState: () => dispatch(clearState()),
});

export default withRouter(connect(null, matchDispatchToProps)(Confirmation));
