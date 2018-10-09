import 'isomorphic-fetch';
import reduxApi from 'redux-api';
import adapterFetch from 'redux-api/lib/adapters/fetch';

export const FETCH_CONDITIONS_SUCCESS = 'FETCH_CONDITIONS_SUCCESS';
export const FETCH_CONDITIONS_ERROR = 'FETCH_CONDITIONS_ERROR';
export const CLEAR_CONDITIONS = 'CLEAR_CONDITIONS';

const conditionsApi = () => reduxApi({
  conditions: {
    crud: true,
    url: '/conditions',
  },
}).use('fetch', adapterFetch(fetch))
  .use('rootUrl', process.env.API_URL)
  .use('options', () => {
    const headers = {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };
    return { headers };
  });

const fetchConditionsSuccess = list => ({
  payload: list,
  type: FETCH_CONDITIONS_SUCCESS,
});

const fetchConditionsError = err => ({
  payload: err,
  type: FETCH_CONDITIONS_ERROR,
});

export const fetchConditions = () => (
  dispatch => (
    dispatch(conditionsApi().actions.conditions.get())
      .then(response => dispatch(fetchConditionsSuccess(response.data)))
      .catch(err => dispatch(fetchConditionsError(err)))
  )
);
