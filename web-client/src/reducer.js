
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import {
  QUERY_NAME,
  QUERY_NAME_SUCCESS,
  QUERY_NAME_FAILURE,
  COMPLETE_NAME,
  RESET_STATE,
} from './constants';

const initialState = {
  queryResults: {},
  queryLoading: false,
  names: {},
};

function homeReducer(state=initialState, action) {
  switch (action.type) {
    case RESET_STATE:
      return initialState;
    case QUERY_NAME:
      return Object.assign({}, state, {queryLoading: true, names: {}});
    case QUERY_NAME_SUCCESS:
      return Object.assign({}, state, {queryResults: action.payload, queryLoading: false});
    case QUERY_NAME_FAILURE:
      return Object.assign({}, state, {queryLoading: false});
    case COMPLETE_NAME:
      return Object.assign({}, state, {queryResults: {}, queryLoading: false, names: action.payload});
    default:
      return state;
  }
};

export const reducers = combineReducers({
  routing: routerReducer,
  home: homeReducer,
});
