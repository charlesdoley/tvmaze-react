import axios from 'axios';
import {ADD_FAV_MOVIE, DELETE_FAV_MOVIE} from './actionTypes';
export const addFavMovie = (id, toggle) => {
  return dispatch => {
    if(!toggle){
        axios.get (`https://api.tvmaze.com/shows/${id}`).then (response =>
        dispatch ({
          type: ADD_FAV_MOVIE,
          payload: response.data,
        })
      );
    } else {
      dispatch ({
        type: DELETE_FAV_MOVIE,
        payload: id,
      })
    }
    
  };
};