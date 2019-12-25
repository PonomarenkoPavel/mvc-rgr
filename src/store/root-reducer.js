import { combineReducers } from 'redux';
import mainReducer from '../ducks/main/reducer';

export default combineReducers({
  main: mainReducer,
});