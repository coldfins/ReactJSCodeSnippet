import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Goal from './Goal';

export default withRouter(connect()(Goal));
