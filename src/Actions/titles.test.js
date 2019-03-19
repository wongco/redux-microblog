import * as actions from './titles';
import { LOAD_TITLE } from './types';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
// mock axios call for thunk testing
jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

    // default state of mock redux store
    const store = mockStore({ titles: {} });

    return store.dispatch(actions.getTitlesFromAPI()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
