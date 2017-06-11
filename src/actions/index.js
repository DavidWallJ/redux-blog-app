import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=davidjwall1234' ;

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  // making a request assigning to 'payload'. Thus, redux promise middleware will auto resolve for us.  'payload' property will give a response object in the reducer.

  return {
    type: 'FETCH_POSTS',
    payload: request
  };
}