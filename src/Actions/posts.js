import axios from 'axios';
import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  DELETE_COMMENT,
  ADD_COMMENT,
  LOAD_POST,
  UPDATE_VOTE
} from './types';
import { BASE_API_URL } from '../config';

// thunk to get Post Detail Info from API
export function getPostDetailsFromAPI(postId) {
  return async function(dispatch) {
    try {
      const res = await axios.get(`${BASE_API_URL}/api/posts/${postId}`);
      const { id, comments, ...post } = res.data;

      // convert commentsArr into commentsObj
      const commentsObj = {};
      comments.forEach(comment => {
        commentsObj[comment.id] = comment.text;
      });

      // create formatted new post for insertion into redux state
      const newPost = {
        [id]: {
          ...post,
          comments: commentsObj
        }
      };
      dispatch(loadPost(newPost));
    } catch (error) {
      console.log('Error getting info from API');
      console.log(error.message);
      throw error;
    }
  };
}

// thunk to add Post Detail Info to API
export function addPostToAPI(postDetails) {
  return async function(dispatch) {
    try {
      const res = await axios({
        url: `${BASE_API_URL}/api/posts/`,
        method: 'post',
        data: postDetails
      });
      const { id, votes, title, description, body } = res.data;

      // create formatted new post for insertion into redux state
      const postObj = {
        title,
        description,
        body,
        votes,
        comments: {}
      };

      dispatch(addPost(id, postObj));
    } catch (error) {
      console.log('Error getting info from API');
      console.log(error.message);
    }
  };
}

// thunk for updating Post Detail Info to API
export function updatePostToAPI(postId, postDetails) {
  return async function(dispatch) {
    try {
      await axios({
        url: `${BASE_API_URL}/api/posts/${postId}`,
        method: 'put',
        data: postDetails
      });

      dispatch(updatePost(postId, postDetails));
    } catch (error) {
      console.log('Error getting info from API');
      console.log(error.message);
    }
  };
}

// thunk for deleting Post from API
export function deletePostFromAPI(postId) {
  return async function(dispatch) {
    try {
      await axios({
        url: `${BASE_API_URL}/api/posts/${postId}`,
        method: 'delete'
      });

      dispatch(deletePost(postId));
    } catch (error) {
      console.log('Error getting info from API');
      console.log(error.message);
    }
  };
}

// thunk for adding comment to specific post on API
export function addCommentToAPI(postId, comment) {
  return async function(dispatch) {
    try {
      const res = await axios({
        url: `${BASE_API_URL}/api/posts/${postId}/comments`,
        method: 'post',
        data: {
          text: comment
        }
      });

      const { id, text } = res.data;

      const commentObj = {
        [id]: text
      };

      dispatch(addComment(postId, commentObj));
    } catch (error) {
      console.log('Error getting info from API');
      console.log(error.message);
    }
  };
}

// thunk for updating vote count on specific post to API
export function voteToApi(dir, postId) {
  return async function(dispatch) {
    try {
      const res = await axios({
        url: `${BASE_API_URL}/api/posts/${postId}/vote/${dir}`,
        method: 'post'
      });

      const { votes } = res.data;

      dispatch(updateVote(postId, votes));
    } catch (error) {
      console.log('Error getting info from API');
      console.log(error.message);
    }
  };
}

// thunk for deleting comment from specific post to API
export function deleteCommentFromAPI(postId, commentId) {
  return async function(dispatch) {
    try {
      await axios({
        url: `${BASE_API_URL}/api/posts/${postId}/comments/${commentId}`,
        method: 'delete'
      });

      dispatch(deleteComment(postId, commentId));
    } catch (error) {
      console.log('Error getting info from API');
      console.log(error.message);
    }
  };
}

/** Action Creators */
export function updateVote(postId, votes) {
  return {
    type: UPDATE_VOTE,
    payload: {
      postId,
      votes
    }
  };
}

export function loadPost(postDetails) {
  return {
    type: LOAD_POST,
    payload: postDetails
  };
}

export function addPost(id, postDetails) {
  return {
    type: ADD_POST,
    payload: {
      id,
      postDetails
    }
  };
}

export function updatePost(id, postDetails) {
  return {
    type: UPDATE_POST,
    payload: {
      id,
      postDetails
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

export function addComment(postId, commentObj) {
  return {
    type: ADD_COMMENT,
    payload: {
      postId,
      commentObj
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
