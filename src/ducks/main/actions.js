import types from './types';

export default {
  setHeight(value) {
    return {
      type: types.SET_HEIGHT,
      value,
    };
  },
  setWidth(value) {
    return {
      type: types.SET_WIDTH,
      value,
    };
  },
  setLength(value) {
    return {
      type: types.SET_LENGTH,
      value,
    };
  },
  setResult(value) {
    return {
      type: types.SET_RESULT,
      value,
    };
  },
};