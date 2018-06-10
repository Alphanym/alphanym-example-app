
import 'whatwg-fetch';
import { call } from 'redux-saga/effects';

export function backendUrl(path) {
  return 'http://localhost:5000/' + path;
}

export function requestJson(url, options) {
  return call(
    (url, options) => fetch(url, options).then((response) => response.json()),
    url,
    options,
  );
}
