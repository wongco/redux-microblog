import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  DELETE_COMMENT,
  ADD_COMMENT,
  LOAD_POST,
  LOAD_TITLE,
  ADD_TITLE,
  UPDATE_TITLE
} from './actionTypes';
import uuid from 'uuid/v4';

const INITIAL_STATE = {
  posts: {
    // 1234: {
    //   title: 'Amazing things',
    //   description: 'an excercise in biting the dust',
    //   body: 'eating all day all night lorem ipsum another one bites the dust',
    //   comments: {
    //     12: 'hello, i like amazing things'
    //   }
    // },
    // 22543: {
    //   title: 'Second wave',
    //   description: 'how the second one came and saved the day',
    //   body: 'lorem ipsum eating things saving the day again',
    //   comments: {
    //     23: 'second is always the best after first'
    //   }
    // }
  },
  titles: {}
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // action for adding new post to redux-state
    case ADD_POST: {
      // const newPost = {
      //   [uuid()]: { ...action.payload, comments: {} }
      // };
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
      const { postId, comment } = action.payload;
      const newComments = {
        ...state.posts[postId].comments,
        [uuid()]: comment
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

    default: {
      return { ...state };
    }
  }
}

export default rootReducer;
