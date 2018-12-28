import { TEST_DISPATCH } from './types';

// Register User
export const registeruser = (userData) => {
    return {
        type: TEST_DISPATCH,
        payload: userData  //will dispatch this to the reducer along with the dispatch data
    };
};