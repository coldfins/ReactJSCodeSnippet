import {
  discardAuthToken,
  login,
  loginStart,
  UNAUTHORIZED,
} from '../store/actions/auth';

const AuthError = (message) => {
  this.name = 'AuthError';
  this.message = message || 'Unauthorized';
  this.stack = (new Error()).stack;
};
AuthError.prototype = Object.create(Error.prototype);
AuthError.prototype.constructor = AuthError;

export default store => next => (action) => {
  if (action.type !== UNAUTHORIZED) return next(action);

  if (!store.getState().auth.isAuthenticating) {
    store.dispatch(discardAuthToken());
    store.dispatch(loginStart());
    store.dispatch(login());
  }

  return null;
};
