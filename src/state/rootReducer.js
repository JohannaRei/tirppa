import { combineReducers } from 'redux';
import settingsReducer from './settings/settingsReducer';
import matchesReducer from './matches/matchesReducer';

const rootReducer = combineReducers({
  settings: settingsReducer,
  matches: matchesReducer,
});

export default rootReducer;
