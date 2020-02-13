import * as authActions from './authActions';
import {put, takeLatest, takeEvery, fork} from 'redux-saga/effects';

import * as axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

function* authRequest({payload}) {
  yield put(authActions.authStart());
  let url =
    'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBoAc2hkELCG0C1ZcKTdY5OO43qRyYd1O8';
  if (payload.isLogin) {
    url =
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBoAc2hkELCG0C1ZcKTdY5OO43qRyYd1O8';
  }
  const userData = {
    email: payload.email,
    password: payload.password,
    returnSecureToken: true,
  };
  try {
    const response = yield axios.post(url, userData);
    yield put(authActions.authSuccess(response.data));
  } catch (e) {
    console.log(e);
    yield put(authActions.authFailed(e.response.data.error));
  }
}

function* authStorageRequest() {
  yield put(authActions.authStorageStart());

  const userData = yield AsyncStorage.getItem('userData');
  if (!userData) {
    yield put(authActions.authStorageFailed());
    return;
  }
  const transformedData = JSON.parse(userData);
  const {token, userId, expiryDate, email} = transformedData;
  const expirationDate = new Date(expiryDate);
  if (expirationDate <= new Date() || !token || !userId) {
    yield put(authActions.authStorageFailed());
    return;
  }
  yield put(authActions.authStorageSuccess({userId, token, email}));
}

function* watchAuthRequest() {
  yield takeLatest(authActions.AUTH_REQUEST, authRequest);
}

function* watchAuthStorageRequest() {
  yield takeLatest(authActions.AUTH_STORAGE_REQUEST, authStorageRequest);
}

const authSagas = [fork(watchAuthRequest), fork(watchAuthStorageRequest)];

export default authSagas;
