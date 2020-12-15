import { combineReducers } from 'redux-immutable';
import { headerReducer } from '../common/reducer';

export default combineReducers(
  {
    header: headerReducer,
  }
)
