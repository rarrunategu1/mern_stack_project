import { GET_ERRORS } from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload;  //which is the errors object that will come from our server - authActions.js
        default:
            return state;
    }
} 