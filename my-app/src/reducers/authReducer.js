import { TEST_DISPATCH } from '../actions/types';

const initialState = {
    isAuthenticated: false, 
    user: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case TEST_DISPATCH:
            return {
                ...state, //will add to the state
                user: action.payload //will fill the user with the payload which is the userdata
            }
        default:
            return state;
    }
} 