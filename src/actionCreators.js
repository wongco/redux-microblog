import { ADD_POST, UPDATE_POST, DELETE_POST } from './actionTypes';

export function addPost(postDetails) {
  return {
    type: ADD_POST,
    payload: postDetails
  };
}

export function savePost(id, post) {
  return {
    type: UPDATE_POST,
    payload: {
      id,
      post
    }
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    payload: {
      id
    }
  };
}
