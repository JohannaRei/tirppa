import { combineReducers } from 'redux';
import settingsReducer from './settings/settingsReducer';

const rootReducer = combineReducers({
  settingsReducer,
});

export default rootReducer;
