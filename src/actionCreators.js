import { ADD_POST, SAVE_POST } from './actionTypes';

export function addPost(postDetails) {
  return {
    type: ADD_POST,
    payload: postDetails
  };
}

export function savePost(id, post) {
  return {
    type: SAVE_POST,
    payload: {
      id,
      post
    }
  };
}