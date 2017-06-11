/**
 * Created by david on 6/10/17.
 */
import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("posts:", _.mapKeys(actions.payload, 'id'));
      return _.mapKeys(actions.payload, 'id')
      // this lodash function will assign the 'id' property as key for the each object
    default:
      return state;
  }
}