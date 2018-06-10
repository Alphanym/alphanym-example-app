
import {
  COMPLETE_NAME,
  QUERY_NAME,
  QUERY_NAME_SUCCESS,
  QUERY_NAME_FAILURE,
  RESET_STATE,
} from "./constants";

export function resetState() {
  return {
    type: RESET_STATE,
  }
}

export function completeName(names) {
  return {
    type: COMPLETE_NAME,
    payload: names,
  };
}

export function queryName(nameText) {
  return {
    type: QUERY_NAME,
    payload: {
      name: nameText,
    },
  };
}

export function queryNameSuccess(data) {
  return {
    type: QUERY_NAME_SUCCESS,
    payload: data,
  };
}

export function queryNameFailure(names) {
  return {
    type: QUERY_NAME_FAILURE,
    payload: names,
  };
}
