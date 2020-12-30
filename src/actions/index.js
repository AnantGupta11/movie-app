// import { data } from "../data";

// {
//     type: 'ADD_MOVIES',
//     movies: [n1,n2,n3];
// }


//actions types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';


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