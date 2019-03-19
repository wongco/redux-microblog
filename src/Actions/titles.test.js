import * as actions from './titles';
import { LOAD_TITLE } from './types';

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
