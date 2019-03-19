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
