import _ from 'lodash';
import { PAGE_CHANGE_ERROR, PAGE_CHANGE_SUCCESS } from '../actions/pagination';

const pagination = (state = {
  page: 1,
}, action) => {
  switch (action.type) {
    case PAGE_CHANGE_ERROR:
      return _.assign({}, state, {
        page: 1,
      });
    case PAGE_CHANGE_SUCCESS:
      return _.assign({}, state, {
        page: action.page,
      });
    default:
      return state;
  }
};

export default pagination;
