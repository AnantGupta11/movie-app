// {
//     type: 'INCREASE_COUNT'
// }
// {
//     type: 'DECREASE_COUNT'
// }

//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FROM_FAVOURITES= 'REMOVE_FROM_FAVOURITES';
export const  SET_SHOW_FAVOURITE= 'SET_SHOW_FAVOURITE';
export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT';

//action creators
export function addMovies (movies){
    return {
        type: ADD_MOVIES,
        movies 
    }
}

export function addFavourites (movie){
    return {
        type: ADD_FAVOURITES,
        movie 
    }
}

export function removeFromFavourites(movie){
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie
    };
}

export function setShowFavourites(val){
    return {
        type: SET_SHOW_FAVOURITE,
        val
    };
}
export function addMovieToList(movie){
    return {
        type: ADD_MOVIE_TO_LIST,
        movie
    };
}

export function handleMovieSearch(movie){
    const url= `http://www.omdbapi.com/?apikey=6be2ac7f&t=${movie}`;

    return function(dispatch){
        fetch(url)
        .then(response=>response.json())
        .then(movie =>{
            console.log('Movie',movie);

            //dispatch an action
            dispatch(addMovieSearchResult(movie));
        })
    }    
}

export function addMovieSearchResult(movie){
    return (
        {
            type: ADD_SEARCH_RESULT,
            movie
        }
    )
}