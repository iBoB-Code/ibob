import { combineReducers } from 'redux';

import home from './homeReducer';
import roadtrip from './roadtripReducer';

export default combineReducers({
  home,
  roadtrip,
});
