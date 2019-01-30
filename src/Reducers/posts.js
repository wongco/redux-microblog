import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  DELETE_COMMENT,
  ADD_COMMENT,
  LOAD_POST,
  UPDATE_VOTE
} from '../Actions/types';

function rootReducer(state = {}, action) {
  switch (action.type) {
    // action for adding new post to redux-state
    case ADD_POST: {
      const { id, postDetails } = action.payload;
      const newPost = { [id]: postDetails };
      const newPosts = { ...state, ...newPost };
      return { ...newPosts };
    }

    // action for saving existing post to redux-state
    case UPDATE_POST: {
      const { id, postDetails } = action.payload;

      // create updatedPost to overwrite
      const newPost = { ...state[id], ...postDetails };

      // replace old post in state
      const newPosts = { ...state, [id]: newPost };
      return { ...newPosts };
    }

    // action for saving existing post to redux-state
    case UPDATE_VOTE: {
      const { postId, votes } = action.payload;

      // create updatedPost to overwrite
      if (state[postId]) {
        const newPost = { ...state[postId], votes };

        // replace old post in state
        const newPosts = { ...state, [postId]: newPost };
        return { ...newPosts };
      }
      return { ...state };
    }

    // action for deleting post in redux-state
    case DELETE_POST: {
      const id = action.payload.id;
      const newPosts = { ...state };
      delete newPosts[id];
      return { ...newPosts };
    }

    // action for deleting comment in redux-state
    case DELETE_COMMENT: {
      const { postId, commentId } = action.payload;
      const newPost = { ...state[postId] };
      delete newPost.comments[commentId];
      const newPosts = { ...state, [postId]: newPost };
      return { ...newPosts };
    }

    // action for saving new comment to redux-state
    case ADD_COMMENT: {
      const { postId, commentObj } = action.payload;
      const newComments = {
        ...state[postId].comments,
        ...commentObj
      };
      const newPost = { ...state[postId], comments: newComments };
      const newPosts = { ...state, [postId]: newPost };
      return { ...newPosts };
    }

    // action for loading post to redux-state
    case LOAD_POST: {
      const newPost = action.payload;
      const newPosts = { ...state, ...newPost };
      return { ...newPosts };
    }

    default: {
      return { ...state };
    }
  }
}

export default rootReducer;
