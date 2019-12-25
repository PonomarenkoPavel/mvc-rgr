import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './root-reducer';
import mainReducer from '../ducks/main/reducer';

const initialState = {};

export const store = createStore(
  mainReducer,
  // initialState,
  composeWithDevTools(),
);
