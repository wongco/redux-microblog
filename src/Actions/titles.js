import axios from 'axios';
import { LOAD_TITLE } from './types';
import { BASE_API_URL } from '../config';

// action creator using thunks to grab info from API
export function getTitlesFromAPI() {
  return async function(dispatch) {
    try {
      const res = await axios.get(`${BASE_API_URL}/api/posts`);
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

export function loadTitles(titles) {
  return {
    type: LOAD_TITLE,
    payload: titles
  };
}
