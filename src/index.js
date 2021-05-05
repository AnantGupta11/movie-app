import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import  rootReducer  from "./reducers";
import AppWrapper from './components/App';

//function logger(obj,next,action)
//logger(obj)(next)(action)
// const logger = function({dispatch, getState}){
//   return function(next){
//     return function (action){
//       //middleware code
//       console.log('ACTION_TYPE=',action.type);
//       next(action);
//     }
//   }
// }

const logger= ({dispatch, getState}) => (next) => (action)=>{
  //middleware code
  if(typeof action !=='function'){
    console.log('ACTION_TYPE=',action.type);
  }
  next(action);
}
// const thunk=({dispatch, getState}) => (next) => (action)=>{
//   //middleware code
//   if (typeof action === 'function'){
//       action(dispatch);
//       return;
//   }
//   next(action);
// }
const store= createStore(rootReducer, applyMiddleware(logger,thunk));

console.log('Store', store);

export const StoreContext= createContext();
console.log('StoreContext',StoreContext);

class Provider extends React.Component{
  
  render (){
    const {store}=this.props;
    return <StoreContext.Provider value={store}>

      {this.props.children}
    </StoreContext.Provider>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

