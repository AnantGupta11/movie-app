import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

//function logger (obj,next,action)
//logger(obj)(next)(action)
// const logger = function({dispatch, getState}){
//     return function(next){
//         return function(action){
//             console.log('ACTION_TYPE= ',action.type);
//             next(action);
//         }
//     }
// }

//modified middleware
const logger = ({dispatch, getState})=>(next)=>(action)=>{
        // logger code
        if(action !=='function'){
            console.log('ACTION_TYPE= ',action.type);

        }
        next(action);
}

// const thunk=({dispatch, getState})=>(next)=>(action)=>{
//     if(typeof action==='function'){
//         action(dispatch);
//         return;
//     }
//     next(action);
// }


const store = createStore(rootReducer, applyMiddleware(logger,thunk));

// console.log('store',store);
// console.log('STATE',store.getState());

// store.dispatch({
//     type:'ADD_MOVIES',
//     movies: [{name:'Superman'}]
// });

ReactDOM.render(<><App store={store} /></>,document.getElementById('root'));



