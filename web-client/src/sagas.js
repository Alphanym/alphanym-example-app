
import { takeLatest, fork, put } from 'redux-saga/effects';
import { QUERY_NAME, NAME_FEEDBACK } from "./constants";
import { queryNameSuccess, queryNameFailure, nameFeedbackSuccess, nameFeedbackFailure } from "./actions";
import { backendUrl, requestJson } from "./utils";

export function* queryName(action) {
  const url = backendUrl('query/');

  const data = action.payload;

  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  };

  try {
    const responseData = yield requestJson(
      url,
      options,
    );
    yield put(queryNameSuccess(responseData));
  } catch (e) {
    yield put(queryNameFailure({
      name: data.name,
      betanym: data.name,
    }));
  }
}

export function* nameFeedback(action) {
  const url = backendUrl('feedback/');

  const data = action.payload;

  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  };

  try {
    const responseData = yield requestJson(
      url,
      options,
    );
    yield put(nameFeedbackSuccess(responseData));
  } catch (e) {
    yield put(nameFeedbackFailure({}));
  }
}

export function* sagas() {
  yield [
    fork(takeLatest, QUERY_NAME, queryName),
    fork(takeLatest, NAME_FEEDBACK, nameFeedback),
  ];
}
