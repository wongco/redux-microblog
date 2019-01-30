import {
  LOAD_TITLE,
  ADD_TITLE,
  UPDATE_TITLE,
  DELETE_TITLE,
  UPDATE_TITLE_VOTE
} from '../actionTypes';

function rootReducer(state = {}, action) {
  switch (action.type) {
    // action for loading title to redux-state
    case LOAD_TITLE: {
      const titles = action.payload;
      return { ...titles };
    }

    // action for adding title to redux-state
    case ADD_TITLE: {
      const titleObj = action.payload;
      const newTitles = { ...state, ...titleObj };
      return { ...newTitles };
    }

    // action for adding title to redux-state
    case UPDATE_TITLE: {
      const titleObj = action.payload;
      const newTitles = { ...state, ...titleObj };
      return { ...newTitles };
    }

    // action for adding title to redux-state
    case UPDATE_TITLE_VOTE: {
      const { postId, votes } = action.payload;
      if (state[postId]) {
        const newTitle = { ...state[postId], votes };
        const newTitles = { ...state, [postId]: newTitle };
        return { ...newTitles };
      }
      return { ...state };
    }

    // action for adding title to redux-state
    case DELETE_TITLE: {
      const { postId } = action.payload;
      const newTitles = { ...state };
      delete newTitles[postId];
      return { ...newTitles };
    }

    default: {
      return { ...state };
    }
  }
}

export default rootReducer;
