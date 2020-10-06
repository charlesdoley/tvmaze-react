import {combineReducers} from 'redux';
import moviesReducer from './movies.reducer';
import addMovieReducer from './addMovie.reducer';

export default combineReducers ({
  movie: moviesReducer,
  addMovie: addMovieReducer
});