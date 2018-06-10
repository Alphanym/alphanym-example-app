
import { takeLatest, fork, put } from 'redux-saga/effects';
import { QUERY_NAME } from "./constants";
import { queryNameSuccess, queryNameFailure } from "./actions";
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

//yield takeLatest(SUBMIT_QUERY, postQuery);

export function* sagas() {
  yield [
    fork(takeLatest, QUERY_NAME, queryName),
  ];
}
