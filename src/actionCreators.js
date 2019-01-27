import { ADD_POST } from './actionTypes';

export function addPost(postDetails) {
  return {
    type: ADD_POST,
    payload: postDetails
  };
}
