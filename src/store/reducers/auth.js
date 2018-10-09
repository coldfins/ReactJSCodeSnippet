import _ from 'lodash';
import {
  AUTH_DISCARD_TOKEN,
  LOGIN_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from '../actions/auth';

function auth(state = {
  errorMessage: '',
  isAuthenticated: !!localStorage.getItem('session_token'),
  isAuthenticating: false,
  profile: { firstName: '', image: '', lastName: '' },
  redirectToReferrer: false,
}, action) {
  switch (action.type) {
    case AUTH_DISCARD_TOKEN:
      return _.assign({}, state, {
        errorMessage: '',
        isAuthenticated: false,
      });
    case LOGIN_START:
      return _.assign({}, state, {
        isAuthenticated: false,
        isAuthenticating: true,
      });
    case GET_PROFILE_SUCCESS:
      return _.assign({}, state, {
        profile: action.profile,
      });
    case GET_PROFILE_FAILURE:
      return _.assign({}, state, {
        profile: { firstName: '', image: '', lastName: '' },
      });
    default:
      return state;
  }
}

export default auth;
