import { combineReducers } from 'redux';
import auth from './auth';
import conditions from './conditions';
import pagination from './pagination';
import patients from './patients';
import providers from './providers';
import questions from './questions';
import pain from './pain';

export const makeRootReducer = asyncReducers => (
  combineReducers({
    auth,
    conditions,
    pagination,
    pain,
    patients,
    providers,
    questions,
    ...asyncReducers,
  })
);

export { makeRootReducer as default };
