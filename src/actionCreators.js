import axios from 'axios';
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
  DELETE_TITLE
} from './actionTypes';

const BASE_API_URL = 'http://localhost:5000/api/posts';

// action creator using thunks to grab info from API
export function getTitlesFromAPI() {
  return async function(dispatch) {
    try {
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
      dispatch(loadTitles(titles));
    } catch (error) {
      console.log('Error getting info from API');
      console.log(error.message);
    }
  };
}

// action create using thunks to get Post Detail Info from API
export function getPostDetailsFromAPI(postId) {
  return async function(dispatch) {
    try {
      const res = await axios.get(`${BASE_API_URL}/${postId}`);
      const { id, comments, votes, ...post } = res.data;

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
      const newPost = {
        [id]: {
          title,
          description,
          body,
          comments: {}
        }
      };

      // create formatted new title for insertion into redux state
      const newTitle = {
        [id]: {
          title,
          description,
          votes
        }
      };

      dispatch(addPost(newPost));
      dispatch(addTitle(newTitle));
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

      const { title, description } = postDetails;

      const updateTitleObj = {
        [postId]: {
          title,
          description,
          votes: 0
        }
      };

      dispatch(updatePost(postId, postDetails));
      dispatch(updateTitle(updateTitleObj));
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
      dispatch(deleteTitle(postId));
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

export function loadPost(postDetails) {
  return {
    type: LOAD_POST,
    payload: postDetails
  };
}

export function loadTitles(titles) {
  return {
    type: LOAD_TITLE,
    payload: titles
  };
}

export function addTitle(titleObj) {
  return {
    type: ADD_TITLE,
    payload: titleObj
  };
}

export function deleteTitle(postId) {
  return {
    type: DELETE_TITLE,
    payload: {
      postId
    }
  };
}

export function updateTitle(titleObj) {
  return {
    type: UPDATE_TITLE,
    payload: titleObj
  };
}

export function addPost(postDetails) {
  return {
    type: ADD_POST,
    payload: postDetails
  };
}

export function updatePost(id, post) {
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

export function addComment(postId, commentObj) {
  return {
    type: ADD_COMMENT,
    payload: {
      postId,
      commentObj
    }
  };
}
