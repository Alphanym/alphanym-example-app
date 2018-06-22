
import {
  COMPLETE_NAME,
  QUERY_NAME,
  QUERY_NAME_SUCCESS,
  QUERY_NAME_FAILURE,
  NAME_FEEDBACK,
  NAME_FEEDBACK_SUCCESS,
  NAME_FEEDBACK_FAILURE,
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

export function nameFeedback(data) {
  return {
    type: NAME_FEEDBACK,
    payload: data,
  };
}

export function nameFeedbackSuccess(data) {
  return {
    type: NAME_FEEDBACK_SUCCESS,
    payload: data,
  };
}

export function nameFeedbackFailure(names) {
  return {
    type: NAME_FEEDBACK_FAILURE,
    payload: names,
  };
}
