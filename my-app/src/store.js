import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';  //root reducer is index.js file in reducers

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState,
    //applyMiddleware(thunk),
    compose(
         applyMiddleware(...middleware),
        //implement redux dev tools
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    ); 

export default store;