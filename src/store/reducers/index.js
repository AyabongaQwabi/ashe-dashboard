import { combineReducers } from 'redux-immutablejs';
import ssh from './ssh';
import nav from './nav';

const rootReducer = combineReducers({
  ssh,
  nav,
});

export default rootReducer;
