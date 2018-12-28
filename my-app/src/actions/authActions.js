import axios from 'axios';
import { GET_ERRORS } from './types';



// Register User
export const registerUser = (userData, history) => dispatch => {
    //dispatch something to our reducer
    axios.post('https://careerdevsintermediate-titamandarica.c9users.io:8081/api/users/register', userData)
          .then(res => history.push('/login'))//redirect if successful
          .catch(err => 
            dispatch({
              type: GET_ERRORS,
              payload: err.response.data
          })
         );
};