import {
  LOAD_TITLE,
  UPDATE_VOTE,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST
} from '../Actions/types';

function rootReducer(state = {}, action) {
  switch (action.type) {
    // action for loading title to redux-state
    case LOAD_TITLE: {
      const titles = action.payload;
      return { ...titles };
    }

    // action for adding title to redux-state
    case ADD_POST: {
      const { id, postDetails } = action.payload;
      const { body, comments, ...titleDetails } = postDetails;
      const titleObj = { [id]: titleDetails };
      const newTitles = { ...state, ...titleObj };
      return { ...newTitles };
    }

    // action for updating title to redux-state
    case UPDATE_POST: {
      const { id, postDetails } = action.payload;
      const { body, comments, ...titleDetails } = postDetails;
      const titleObj = { [id]: titleDetails };
      const newTitles = { ...state, ...titleObj };
      return { ...newTitles };
    }

    // action for deleting title to redux-state
    case DELETE_POST: {
      const { id } = action.payload;
      const newTitles = { ...state };
      delete newTitles[id];
      return { ...newTitles };
    }

    // action for updating vote total to redux-state
    case UPDATE_VOTE: {
      const { postId, votes } = action.payload;
      if (state[postId]) {
        const newTitle = { ...state[postId], votes };
        const newTitles = { ...state, [postId]: newTitle };
        return { ...newTitles };
      }
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
}

export default rootReducer;
