import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"; //root reducer is index.js file in reducers

const initialState = {};

const middleware = [thunk];

// Developer tools middleware
const composeSetup =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  rootReducer,
  initialState,
  composeSetup(applyMiddleware(...middleware))

  // const store = createStore(
  //     rootReducer,
  //     initialState,
  //     //applyMiddleware(thunk),
  //     compose(
  //          applyMiddleware(...middleware),
  //         //implement redux dev tools
  //         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //     )
);

export default store;
