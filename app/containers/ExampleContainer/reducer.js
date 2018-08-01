/*
 *
 * ExampleContainer reducer
 *
 */

import { fromJS } from 'immutable';
// import { DEFAULT_ACTION } from './constants';
import * as types from './constants';

const initialState = fromJS({
  requesting: false,
  response: '',
  error: '',
  success: false
});

function exampleContainerReducer(state = initialState, action = {type: ''}) {
  switch (action.type) {
    case types.DEFAULT_ACTION:
      return state;
    case types.DEFAULT_ACTION_REQUEST:
      return state;
    case types.DEFAULT_ACTION_SUCCESS:
      return state;
    case types.DEFAULT_ACTION_FAILURE:
      return state;
    default:
      return state;
  }
}

export default exampleContainerReducer;
