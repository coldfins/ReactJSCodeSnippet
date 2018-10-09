import { connect } from 'react-redux';
import { setSubscribe } from '../../store/actions/pain';
import Footer from './Footer';

const mapDispatchToProps = dispatch => ({
  setSubscribe: email => dispatch(setSubscribe(email)),
});

const mapStateToProps = state => ({
  subscribe: state.pain.subscribe,
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
