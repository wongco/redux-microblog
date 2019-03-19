import * as actions from './titles';
import { LOAD_TITLE } from './types';

// configuration for mock redux store with thunks enabled
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// mock axios library for thunk testing
jest.mock('axios');

describe('titles redux actions', () => {
  it('should create an action load post titles correctly', () => {
    const payload = {
      1: {
        title: 'First Post',
        description: 'Best post ever!',
        votes: 300
      }
    };

    const expectedAction = {
      type: LOAD_TITLE,
      payload
    };

    expect(actions.loadTitles(payload)).toEqual(expectedAction);
  });
});

describe('titles thunk actions', () => {
  it('should create loadTitles action when fetching data from API is complete', () => {
    axios.get.mockImplementationOnce(() => {
      return Promise.resolve({
        data: [
          {
            id: 1,
            title: 'newest post',
            description: 'amazing description for first',
            votes: 23
          },
          {
            id: 2,
            title: 'second newest post',
            description: 'A very good post!',
            votes: 17
          }
        ]
      });
    });
    const expectedActions = [
      {
        type: LOAD_TITLE,
        payload: {
          1: {
            title: 'newest post',
            description: 'amazing description for first',
            votes: 23
          },
          2: {
            title: 'second newest post',
            description: 'A very good post!',
            votes: 17
          }
        }
      }
    ];
    // initialize mock redux store with initial state
    const store = mockStore({ titles: {} });
    // invoke thunk action creator and compare expected dispatch Actions
    return store.dispatch(actions.getTitlesFromAPI()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
