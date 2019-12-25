import types from './types';

const initialState = {
  width: '',
  height: '',
  length: '',
  result: {},
}

export default function(state = initialState, { type, value }) {
  switch(type) {
    case types.SET_HEIGHT: 
      return {
        ...state,
        height: value,
      };
    case types.SET_LENGTH:
      return {
        ...state,
        length: value,
      };
    case types.SET_WIDTH:
      return {
        ...state,
        width: value,
      };
    case types.SET_RESULT:
      return {
        ...state,
        result: value,
      };
    default: 
      return state;
  }
}