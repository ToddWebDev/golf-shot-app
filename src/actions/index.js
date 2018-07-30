import axios from 'axios';

export function getCourses() {
  return (dispatch) => {
    axios.get('http://localhost:3000/courses')
    .then(response => {
      dispatch({
        type: 'GET_COURSES',
        payload: response.data
      });
    });
  };
}