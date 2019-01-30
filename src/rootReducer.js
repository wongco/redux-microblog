import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  DELETE_COMMENT,
  ADD_COMMENT,
  LOAD_POST,
  LOAD_TITLE,
  ADD_TITLE,
  UPDATE_TITLE,
  DELETE_TITLE,
  UPDATE_POST_VOTE,
  UPDATE_TITLE_VOTE
} from './actionTypes';

const INITIAL_STATE = {
  posts: {},
  titles: {}
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // action for adding new post to redux-state
    case ADD_POST: {
      const newPost = action.payload;
      const newPosts = { ...state.posts, ...newPost };
      return { ...state, posts: newPosts };
    }

    // action for saving existing post to redux-state
    case UPDATE_POST: {
      const { id, post } = action.payload;

      // create updatedPost to overwrite
      const newPost = { ...state.posts[id], ...post };

      // replace old post in state
      const newPosts = { ...state.posts, [id]: newPost };
      return { ...state, posts: newPosts };
    }

    // action for saving existing post to redux-state
    case UPDATE_POST_VOTE: {
      const { postId, votes } = action.payload;

      // create updatedPost to overwrite
      if (state.posts[postId]) {
        const newPost = { ...state.posts[postId], votes };

        // replace old post in state
        const newPosts = { ...state.posts, [postId]: newPost };
        return { ...state, posts: newPosts };
      }
      return { ...state };
    }

    // action for deleting post in redux-state
    case DELETE_POST: {
      const id = action.payload.id;
      const newPosts = { ...state.posts };
      delete newPosts[id];
      return { ...state, posts: newPosts };
    }

    // action for deleting comment in redux-state
    case DELETE_COMMENT: {
      const { postId, commentId } = action.payload;
      const newPost = { ...state.posts[postId] };
      delete newPost.comments[commentId];
      const newPosts = { ...state.posts, [postId]: newPost };
      return { ...state, posts: newPosts };
    }

    // action for saving new comment to redux-state
    case ADD_COMMENT: {
      const { postId, commentObj } = action.payload;
      const newComments = {
        ...state.posts[postId].comments,
        ...commentObj
      };
      const newPost = { ...state.posts[postId], comments: newComments };
      const newPosts = { ...state.posts, [postId]: newPost };
      return { ...state, posts: newPosts };
    }

    // action for loading title to redux-state
    case LOAD_TITLE: {
      const titles = action.payload;
      return { ...state, titles };
    }

    // action for loading post to redux-state
    case LOAD_POST: {
      const newPost = action.payload;
      const newPosts = { ...state.posts, ...newPost };
      return { ...state, posts: newPosts };
    }

    // action for adding title to redux-state
    case ADD_TITLE: {
      const titleObj = action.payload;
      const newTitles = { ...state.titles, ...titleObj };
      return { ...state, titles: newTitles };
    }

    // action for adding title to redux-state
    case UPDATE_TITLE: {
      const titleObj = action.payload;
      const newTitles = { ...state.titles, ...titleObj };
      return { ...state, titles: newTitles };
    }

    // action for adding title to redux-state
    case UPDATE_TITLE_VOTE: {
      const { postId, votes } = action.payload;
      if (state.titles[postId]) {
        const newTitle = { ...state.titles[postId], votes };
        const newTitles = { ...state.titles, [postId]: newTitle };
        return { ...state, titles: newTitles };
      }
      return { ...state };
    }

    // action for adding title to redux-state
    case DELETE_TITLE: {
      const { postId } = action.payload;
      const newTitles = { ...state.titles };
      delete newTitles[postId];
      return { ...state, titles: newTitles };
    }

    default: {
      return { ...state };
    }
  }
}

export default rootReducer;
