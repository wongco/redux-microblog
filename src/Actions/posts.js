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

const BASE_API_URL = 'http://localhost:5000/api/posts';

// action create using thunks to get Post Detail Info from API
export function getPostDetailsFromAPI(postId) {
  return async function(dispatch) {
    try {
      const res = await axios.get(`${BASE_API_URL}/${postId}`);
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
    }
  };
}

// action create using thunks to get Post Detail Info from API
export function addPostToAPI(postDetails) {
  return async function(dispatch) {
    try {
      const res = await axios({
        url: `${BASE_API_URL}/`,
        method: 'post',
        data: postDetails
      });
      const { id, votes, title, description, body } = res.data;

      // create formatted new post for insertion into redux state
      const postOb = {
        title,
        description,
        body,
        votes,
        comments: {}
      };

      dispatch(addPost(id, postOb));
    } catch (error) {
      console.log('Error getting info from API');
      console.log(error.message);
    }
  };
}

// action create using thunks to update Post Detail Info to API
export function updatePostToAPI(postId, postDetails) {
  return async function(dispatch) {
    try {
      await axios({
        url: `${BASE_API_URL}/${postId}`,
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

// action create using thunks to delete Post from API
export function deletePostFromAPI(postId) {
  return async function(dispatch) {
    try {
      await axios({
        url: `${BASE_API_URL}/${postId}`,
        method: 'delete'
      });

      dispatch(deletePost(postId));
    } catch (error) {
      console.log('Error getting info from API');
      console.log(error.message);
    }
  };
}

// action create using thunks to add comment to API
export function addCommentToAPI(postId, comment) {
  return async function(dispatch) {
    try {
      const res = await axios({
        url: `${BASE_API_URL}/${postId}/comments`,
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

// action create using thunks to add comment to API
export function voteToApi(dir, postId) {
  return async function(dispatch) {
    try {
      const res = await axios({
        url: `${BASE_API_URL}/${postId}/vote/${dir}`,
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

// action create using thunks to add delete comment API
export function deleteCommentFromAPI(postId, commentId) {
  return async function(dispatch) {
    try {
      await axios({
        url: `${BASE_API_URL}/${postId}/comments/${commentId}`,
        method: 'delete'
      });

      dispatch(deleteComment(postId, commentId));
    } catch (error) {
      console.log('Error getting info from API');
      console.log(error.message);
    }
  };
}

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

export function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    payload: {
      postId,
      commentId
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