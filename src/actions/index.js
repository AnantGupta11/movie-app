// import { data } from "../data";

// {
//     type: 'ADD_MOVIES',
//     movies: [n1,n2,n3];
// }


//actions types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE= 'REMOVE_FAVOURITE';
export const SET_SHOW_FAVOURITE= 'SET_SHOW_FAVOURITE';


//action creators
export function addMovies (movies){
    return {
            type: ADD_MOVIES,
            movies:movies
    }
}

export function addFavourite (movie){
    return {
            type: ADD_FAVOURITE,
            movie
    }
}
export function removeFavourite(movie){
    return {
        type: REMOVE_FAVOURITE,
        movie
    }
}

export function setShowFavourites(val){
    return {
        type: SET_SHOW_FAVOURITE,
        val
    }
}

