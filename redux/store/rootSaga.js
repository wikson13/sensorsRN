import {all} from 'redux-saga/effects';
import authSagas from '../auth/authSagas';
import counterSagas from '../counter/counterSagas';
export default function* rootSaga() {
  yield all([...authSagas, ...counterSagas]);
}
