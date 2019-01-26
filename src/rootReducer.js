import { TEST } from './actionTypes';
const INITIAL_STATE = { posts: {} };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TEST: {
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
}

export default rootReducer;
