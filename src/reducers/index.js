import { ADD_MOVIES, ADD_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITE } from "../actions/index";

const initialMovieState = {
    list: [],
    favourites:[],
    showFavourites : false
}

// getting state from action to perform 
export default function movies(state=initialMovieState,action) {
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list:action.movies
    //     };
    // }
    // return state;
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list:action.movies
            };
        case ADD_FAVOURITES:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );
            return {
                ...state,
                favourites: filteredArray

            }
        
        case SET_SHOW_FAVOURITE:
            return{
                ...state,
                showFavourites:action.val
            }


        default:
            return state;
    }
}

