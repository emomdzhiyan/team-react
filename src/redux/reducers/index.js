import { combineReducers } from 'redux';
import teamReducer from './team';
import infoReducer from './info';

const allReducers = combineReducers({
  teamReducer,
  infoReducer
});

export default allReducers;
