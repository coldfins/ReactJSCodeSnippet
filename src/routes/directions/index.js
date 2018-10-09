import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Directions from './Directions';

export default withRouter(connect()(Directions));
