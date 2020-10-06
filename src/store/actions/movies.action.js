import axios from 'axios';
import {FETCH_MOVIES} from './actionTypes';
export const fetchMovies = (query) => {
  return dispatch => {
    axios.get (`https://api.tvmaze.com/search/shows?q=${query}`).then (response =>
      dispatch ({
        type: FETCH_MOVIES,
        payload: response.data,
      })
    );
  };
};