import { combineReducers } from 'redux';

import home from './homeReducer';
import harvest from './workReducer';

export default combineReducers({
  home,
  harvest,
});
