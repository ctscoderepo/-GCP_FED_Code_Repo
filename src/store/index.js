import {createStore,applyMiddleware,compose} from 'redux';
import reducer from '../reducers';

const middleware=[];
const initialState={};

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);
export default createStore(reducer, initialState,enhancer);