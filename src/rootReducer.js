import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  DELETE_COMMENT
} from './actionTypes';
import uuid from 'uuid/v4';

const INITIAL_STATE = {
  posts: {
    1234: {
      title: 'Amazing things',
      description: 'an excercise in biting the dust',
      body: 'eating all day all night lorem ipsum another one bites the dust',
      comments: {
        12: {
          comment: 'hello, i like amazing things'
        }
      }
    },
    22543: {
      title: 'Second wave',
      description: 'how the second one came and saved the day',
      body: 'lorem ipsum eating things saving the day again',
      comments: {
        23: {
          comment: 'second is always the best after first'
        }
      }
    }
  }
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // action for adding new post to redux-state
    case ADD_POST: {
      const newPost = {
        [uuid()]: { ...action.payload, comments: {} }
      };
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
    case DELETE_POST: {
      const id = action.payload.id;
      const newPosts = { ...state.posts };
      delete newPosts[id];
      return { ...state, posts: newPosts };
    }

    // action for saving existing post to redux-state
    case DELETE_COMMENT: {
      const { postId, commentId } = action.payload;
      const newPost = { ...state.posts[postId] };
      delete newPost.comments[commentId];
      const newPosts = { ...state.posts, [postId]: newPost };
      return { ...state, posts: newPosts };
    }

    default: {
      return { ...state };
    }
  }
}

export default rootReducer;
