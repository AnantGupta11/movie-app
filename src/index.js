import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

//function logger (obj,next,action)
//logger(obj)(next)(action)
const logger = function({dispatch, getState}){
    return function(next){
        return function(action){
            console.log('ACTION_TYPE= ',action.type);
            next(action);
        }
    }
}


const store = createStore(rootReducer, applyMiddleware(logger));

// console.log('store',store);
// console.log('STATE',store.getState());

// store.dispatch({
//     type:'ADD_MOVIES',
//     movies: [{name:'Superman'}]
// });

ReactDOM.render(<><App store={store} /></>,document.getElementById('root'));



