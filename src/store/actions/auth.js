import _ from 'lodash';
import 'isomorphic-fetch';
import auth0 from 'auth0-js';

export const AUTH_DISCARD_TOKEN = 'AUTH_DISCARD_TOKEN';
export const LOGIN_START = 'LOGIN_START';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';
export const UNAUTHORIZED = 'UNAUTHORIZED';

const ACCESS_TOKEN_KEY = 'access_token';
const ID_TOKEN_KEY = 'id_token';
const requestedScopes = 'edit:counselor';
const auth = new auth0.WebAuth({
  clientID: process.env.AUTH0_CLIENT_ID || '',
  domain: process.env.AUTH0_DOMAIN || '',
  scope: requestedScopes,
});

export const discardAuthToken = () => ({
  type: AUTH_DISCARD_TOKEN,
});

const getProfileSuccess = profile => ({
  profile,
  type: GET_PROFILE_SUCCESS,
});

const getProfileFailure = () => ({
  type: GET_PROFILE_FAILURE,
});

export const loginStart = () => ({
  type: LOGIN_START,
});

export const unauthorized = () => ({
  type: UNAUTHORIZED,
});

export const getProfile = () => (
  (dispatch) => {
    const profile = JSON.parse(localStorage.getItem('profile'));
    return _.isEmpty(profile)
      ? dispatch(getProfileFailure())
      : dispatch(getProfileSuccess(profile));
  }
);

export const isProfileEmpty = () => {
  const profile = JSON.parse(localStorage.getItem('profile'));
  if (_.isEmpty(profile)) return true;
  return profile.firstName === '' && profile.lastName === '' && profile.image === '';
};

const clearIdToken = () => {
  localStorage.removeItem(ID_TOKEN_KEY);
};

const clearAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

export const login = () => {
  auth.authorize({
    audience: process.env.AUTH0_AUDIENCE,
    redirectUri: process.env.AUTH0_CALLBACK,
    responseType: 'token id_token',
    scope: 'openid profile groups permissions roles',
  });
};

export const logout = () => (
  (dispatch) => {
    clearIdToken();
    clearAccessToken();
    dispatch(login());
  }
);

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);

export const processCallback = () => (
  dispatch => (
    new Promise((resolve, reject) => {
      auth.parseHash({ hash: window.location.hash }, (err, authResult) => {
        if (err) return reject(err);
        localStorage.setItem(ACCESS_TOKEN_KEY, authResult.accessToken);
        localStorage.setItem(ID_TOKEN_KEY, authResult.idToken);
        return auth.client.userInfo(authResult.accessToken, (userErr, user) => {
          if (userErr) return reject(userErr);
          dispatch(getProfileSuccess(user));
          return resolve(user);
        });
      });
    })
  )
);

export const setProfile = (profile) => {
  localStorage.setItem('profile', JSON.stringify(profile));
};
