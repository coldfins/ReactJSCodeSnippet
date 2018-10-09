import _ from 'lodash';
import {
  FETCH_CONDITIONS_SUCCESS,
  FETCH_CONDITIONS_ERROR,
  CLEAR_CONDITIONS,
} from '../actions/conditions';

const INITIAL_STATE = {
  conditions: [],
  processing: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CONDITIONS_SUCCESS:
      return {
        ...state,
        conditions: action.payload,
        processing: false,
      };

    case FETCH_CONDITIONS_ERROR:
      return {
        ...state,
        error: action.payload,
        processing: false,
      };

    case CLEAR_CONDITIONS:
      return {
        ...state,
        error: '',
      };

    default:
      return state;
  }
};
