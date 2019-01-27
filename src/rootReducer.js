import { ADD_POST } from './actionTypes';
import uuid from 'uuid/v4';

const INITIAL_STATE = {
  posts: {
    1234: {
      title: 'Amazing things',
      description: 'an excercise in biting the dust',
      body: 'eating all day all night lorem ipsum another one bites the dust'
    },
    22543: {
      title: 'Second wave',
      description: 'how the second one came and saved the day',
      body: 'lorem ipsum eating things saving the day again'
    }
  }
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // action for adding new post to redux-state
    case ADD_POST: {
      const newPost = {
        [uuid()]: { ...action.payload }
      };
      const newPosts = { ...state.posts, ...newPost };
      return { ...state, posts: newPosts };
    }

    default: {
      return { ...state };
    }
  }
}

export default rootReducer;
