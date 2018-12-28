import axios from 'axios';
import { GET_ERRORS } from './types';

// Register User
export const registerUser = (userData) => dispatch => {
    //dispatch something to our reducer
    axios
          .post('/api/users/register', userData)
          .then(res => console.log(res.data))//redirect if successful
          .catch(err => 
          dispatch({
              type: GET_ERRORS,
              payload: err.response.data
          })
         );
};