import { combineReducers } from 'redux';
import { RECEIVE_USER } from './actions';

function user(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
}

export default combineReducers({
  user
});
