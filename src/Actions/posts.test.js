import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  DELETE_COMMENT,
  ADD_COMMENT,
  LOAD_POST,
  UPDATE_VOTE
} from './types';

import * as actions from './posts';

// configuration for mock redux store with thunks enabled
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// mock axios library for thunk testing
jest.mock('axios');

describe('posts redux actions', () => {
  it('should create an action to update vote on a post correctly', () => {
    const payload = {
      postId: 100,
      votes: 10
    };

    const expectedAction = {
      type: UPDATE_VOTE,
      payload
    };
    expect(actions.updateVote(100, 10)).toEqual(expectedAction);
    expect(actions.updateVote(101, 10)).not.toEqual(expectedAction);
    expect(actions.updateVote(100, 11)).not.toEqual(expectedAction);
  });

  it('should create an action to load a post correctly', () => {
    const postDetail = {
      50: {
        title: 'Amazing Post Title',
        description: 'Amazing Post Description',
        body: 'Amazing Post Body',
        votes: 'Amazing amount of votes',
        comments: {
          15: 'best comment'
        }
      }
    };

    const differentPostDetail = {
      51: {
        title: 'Better Post Title',
        description: 'Better Post Description',
        body: 'Better Post Body',
        votes: 'Better amount of votes',
        comments: {
          15: 'best comment'
        }
      }
    };

    const expectedAction = {
      type: LOAD_POST,
      payload: postDetail
    };

    expect(actions.loadPost(postDetail)).toEqual(expectedAction);
    expect(actions.updateVote(differentPostDetail)).not.toEqual(expectedAction);
  });

  it('should create an action to add a post correctly', () => {
    const payload = {
      id: 50,
      postDetails: {
        title: 'Amazing Post Title',
        description: 'Amazing Post Description',
        body: 'Amazing Post Body',
        votes: 'Amazing amount of votes',
        comments: {
          15: 'best comment'
        }
      }
    };

    const expectedAction = {
      type: ADD_POST,
      payload
    };

    expect(
      actions.addPost(50, {
        title: 'Amazing Post Title',
        description: 'Amazing Post Description',
        body: 'Amazing Post Body',
        votes: 'Amazing amount of votes',
        comments: {
          15: 'best comment'
        }
      })
    ).toEqual(expectedAction);
  });

  it('should create an action to update a post correctly', () => {
    const payload = {
      id: 50,
      postDetails: {
        title: 'Amazing Post Title',
        description: 'Amazing Post Description',
        body: 'Amazing Post Body',
        votes: 'Amazing amount of votes',
        comments: {
          15: 'best comment'
        }
      }
    };

    const expectedAction = {
      type: UPDATE_POST,
      payload
    };

    expect(
      actions.updatePost(50, {
        title: 'Amazing Post Title',
        description: 'Amazing Post Description',
        body: 'Amazing Post Body',
        votes: 'Amazing amount of votes',
        comments: {
          15: 'best comment'
        }
      })
    ).toEqual(expectedAction);
  });

  it('should create an action to delete a post correctly', () => {
    const payload = {
      id: 50
    };

    const expectedAction = {
      type: DELETE_POST,
      payload
    };

    expect(actions.deletePost(50)).toEqual(expectedAction);
  });

  it('should create an action to add a comment to a post correctly', () => {
    const payload = {
      postId: 50,
      commentObj: {
        19: 'Amazing Comment'
      }
    };

    const expectedAction = {
      type: ADD_COMMENT,
      payload
    };

    expect(
      actions.addComment(50, {
        19: 'Amazing Comment'
      })
    ).toEqual(expectedAction);
  });

  it('should create an action to remove a comment from a post correctly', () => {
    const payload = {
      postId: 50,
      commentId: 19
    };

    const expectedAction = {
      type: DELETE_COMMENT,
      payload
    };

    expect(actions.deleteComment(50, 19)).toEqual(expectedAction);
  });
});

describe('posts thunk actions', () => {
  it('should get post detail from api correctly', () => {
    axios.get.mockImplementationOnce(() => {
      return Promise.resolve({
        data: {
          id: 1,
          title: 'First Post',
          description: 'Best post ever!',
          body: 'Everyone loves posting first. I win!',
          votes: 0,
          comments: [
            {
              id: 7,
              text: 'WonderBoo!'
            }
          ]
        }
      });
    });

    const payload = {
      1: {
        title: 'First Post',
        description: 'Best post ever!',
        body: 'Everyone loves posting first. I win!',
        votes: 0,
        comments: {
          7: 'WonderBoo!'
        }
      }
    };

    const expectedActions = [
      {
        type: LOAD_POST,
        payload
      }
    ];

    // initialize mock redux store with initial state
    const store = mockStore({ posts: {} });

    // invoke thunk action creator and compare expected dispatch Actions
    return store.dispatch(actions.getPostDetailsFromAPI()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should get add a post to api correctly', () => {
    // mock axios return data
    axios.mockImplementationOnce(() => {
      return Promise.resolve({
        data: {
          id: 1,
          title: 'First Post',
          description: 'Best post ever!',
          body: 'Everyone loves posting first. I win!',
          votes: 0
        }
      });
    });

    // simulate inbound data from user input
    const postId = 1;
    const userAddedPostDetails = {
      id: postId,
      postDetails: {
        title: 'First Post',
        description: 'Best post ever!',
        body: 'Everyone loves posting first. I win!',
        votes: 0,
        comments: {}
      }
    };

    // expected action to be dispatched
    const expectedActions = [
      {
        type: ADD_POST,
        payload: userAddedPostDetails
      }
    ];

    // initialize mock redux store with initial state
    const store = mockStore({ posts: {} });

    // invoke thunk action creator and compare expected dispatch Actions
    return store
      .dispatch(actions.addPostToAPI(postId, userAddedPostDetails))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should get update a post to api correctly', () => {
    // mock axios return data
    axios.mockImplementationOnce(() => {
      return Promise.resolve({
        data: {
          id: 2,
          title: 'First Post Updated',
          description: 'Best post ever!',
          body: 'Everyone loves posting first. I win!',
          votes: 0
        }
      });
    });

    // simulate inbound data from user input
    const postId = 2;
    const userUpdatedPostDetails = {
      id: postId,
      postDetails: {
        title: 'First Post Updated',
        description: 'Best post ever!',
        body: 'Everyone loves posting first. I win!',
        votes: 0
      }
    };

    // expected action to be dispatched
    const expectedActions = [
      {
        type: UPDATE_POST,
        payload: {
          id: postId,
          postDetails: userUpdatedPostDetails
        }
      }
    ];

    // initialize mock redux store with initial state
    const store = mockStore({
      posts: {
        2: {
          title: 'First Post',
          description: 'Best post ever!',
          body: 'Everyone loves posting first. I win!',
          votes: 0,
          comments: {}
        }
      }
    });

    // invoke thunk action creator and compare expected dispatch Actions
    return store
      .dispatch(actions.updatePostToAPI(postId, userUpdatedPostDetails))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should get delete a post from the api correctly', () => {
    // mock axios return data
    axios.mockImplementationOnce(() => {
      return Promise.resolve({
        data: {
          message: 'deleted'
        }
      });
    });

    // simulate inbound data from user input
    const postId = 2;

    // expected action to be dispatched
    const expectedActions = [
      {
        type: DELETE_POST,
        payload: {
          id: postId
        }
      }
    ];

    // initialize mock redux store with initial state
    const store = mockStore({
      posts: {
        2: {
          title: 'First Post Original',
          description: 'Best post ever!',
          body: 'Everyone loves posting first. I win!',
          votes: 0,
          comments: {}
        }
      }
    });

    // invoke thunk action creator and compare expected dispatch Actions
    return store.dispatch(actions.deletePostFromAPI(postId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should get add a comment to a post to the api correctly', () => {
    // mock axios return data
    axios.mockImplementationOnce(() => {
      return Promise.resolve({
        data: {
          id: 4,
          text: 'wow great comment'
        }
      });
    });

    // simulate inbound data from user input
    const postId = 2;
    const userInputComment = {
      4: 'wow great comment'
    };

    // expected action to be dispatched
    const expectedActions = [
      {
        type: ADD_COMMENT,
        payload: {
          postId,
          commentObj: userInputComment
        }
      }
    ];

    // initialize mock redux store with initial state
    const store = mockStore({
      posts: {
        2: {
          title: 'First Post Original',
          description: 'Best post ever!',
          body: 'Everyone loves posting first. I win!',
          votes: 0,
          comments: {}
        }
      }
    });

    // invoke thunk action creator and compare expected dispatch Actions
    return store
      .dispatch(actions.addCommentToAPI(postId, userInputComment))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should delete a comment to a post to the api correctly', () => {
    // mock axios return data
    axios.mockImplementationOnce(() => {
      return Promise.resolve({
        data: {
          message: 'deleted'
        }
      });
    });

    // simulate inbound data from user input
    const postId = 2;
    const commentId = 4;

    // expected action to be dispatched
    const expectedActions = [
      {
        type: DELETE_COMMENT,
        payload: {
          postId,
          commentId
        }
      }
    ];

    // initialize mock redux store with initial state
    const store = mockStore({
      posts: {
        2: {
          title: 'First Post Original',
          description: 'Best post ever!',
          body: 'Everyone loves posting first. I win!',
          votes: 0,
          comments: {}
        }
      }
    });

    // invoke thunk action creator and compare expected dispatch Actions
    return store
      .dispatch(actions.deleteCommentFromAPI(postId, commentId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should update voting for a post to the api correctly', () => {
    // mock axios return data
    axios.mockImplementationOnce(() => {
      return Promise.resolve({
        data: {
          votes: 1
        }
      });
    });

    // simulate inbound data from user input
    const postId = 4;
    const votes = 1;

    // expected action to be dispatched
    const expectedActions = [
      {
        type: UPDATE_VOTE,
        payload: {
          postId,
          votes
        }
      }
    ];

    // initialize mock redux store with initial state
    const store = mockStore({
      posts: {
        2: {
          title: 'First Post Original',
          description: 'Best post ever!',
          body: 'Everyone loves posting first. I win!',
          votes: 0,
          comments: {}
        }
      }
    });

    // invoke thunk action creator and compare expected dispatch Actions
    return store.dispatch(actions.voteToApi('up', postId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
