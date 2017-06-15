/**
 * Created by david on 6/10/17.
 */
import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case 'DELETE_POST':
      return _.omit(state, action.payload);
      // action.payload will be the 'id' of the post
    case 'FETCH_POST':
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;
      // same as
      return { ...state, [action.payload.data.id]: action.payload.data };
    case 'FETCH_POSTS':
      return _.mapKeys(action.payload.data, 'id');
      // this lodash function will assign the 'id' property as key for the each object
    default:
      return state;
  }
}