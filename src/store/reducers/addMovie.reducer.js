import {ADD_FAV_MOVIE, DELETE_FAV_MOVIE} from '../actions/actionTypes';

export default function addMovieReducer (state = [], action) {
  // let flag = false;
  switch (action.type) {
    case ADD_FAV_MOVIE:
      // state.map((value) => {
      //   if(value.id === action.payload.id){
      //     flag = true;
      //   }
      //  })
      //  if(flag){
      //    return state;
      //  }
      return [...state, action.payload];
    case DELETE_FAV_MOVIE:
        const newDelete = state.filter((value)=> {
          return value.id !== action.payload
        })
        return newDelete
    default:
      return state;
  }
}