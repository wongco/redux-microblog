import axios from 'axios';
import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  DELETE_COMMENT,
  ADD_COMMENT,
  LOAD_POSTS
} from './actionTypes';

const BASE_API_URL = 'http://localhost:5000/api/posts';

// action creator using thunks to grab info from API
export function getTitlesFromAPI() {
  return async function(dispatch) {
    const res = await axios.get(`${BASE_API_URL}`);
    const titlesArr = res.data;
    const titles = {};
    titlesArr.forEach(post => {
      const { id, title, description, votes } = post;
      titles[id] = {
        title,
        description,
        votes
      };
    });
    dispatch(loadPost(titles));
  };
}

export function loadPost(titles) {
  return {
    type: LOAD_POSTS,
    payload: titles
  };
}

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

export function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    payload: {
      postId,
      commentId
    }
  };
}

export function addComment(postId, comment) {
  return {
    type: ADD_COMMENT,
    payload: {
      postId,
      comment
    }
  };
}
