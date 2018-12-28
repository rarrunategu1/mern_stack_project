import { TEST_DISPATCH } from './types';

// Register User
export const registerUser = (userData) => {
    //dispatch something to our reducer
    return {
        type: TEST_DISPATCH,
        payload: userData  //will dispatch this to the reducer along with the dispatch data
    };
};