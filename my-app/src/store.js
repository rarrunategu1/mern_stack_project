import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';  //root reducer is index.js file in reducers

const middleware = [thunk];

const store = createStore((rootReducer) => [], {}, applyMiddleware(...middleware)); //first parameter is root reducer

export default store;