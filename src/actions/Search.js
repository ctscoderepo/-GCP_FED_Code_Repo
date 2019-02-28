import {get} from './BaseApi';

export const searchResults = type => async dispatch => {
  const res = await get(
    `http://104.154.92.99/keywordsearch?keyword=${type}`
  );
  dispatch({ type: "SEARCHRESULTS", payload: res.data });
};