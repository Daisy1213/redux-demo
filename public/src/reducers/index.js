import {combineReducers} from 'redux';
import {RECEIVE_TODOS, REQUEST_TODOS} from '../actions';

//state为undefined时，赋值为ture
const isLoading = (state=true, action)=> {
  switch(action.type) {
    case REQUEST_TODOS:
      return true;
    case RECEIVE_TODOS:
      return false;
    default:
      return state;
  }
  return state;
};

const todos = (state=[], action)=> {
  switch(action.type) {
    case RECEIVE_TODOS:
      return action.data;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos,
  isLoading
});

export default rootReducer;