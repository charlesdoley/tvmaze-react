
import {FETCH_MOVIES} from '../actions/actionTypes';

const initialState = {
  movies: [],
};

export default function moviesReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {...state, movies: action.payload};
    default:
      return state;
  }
}