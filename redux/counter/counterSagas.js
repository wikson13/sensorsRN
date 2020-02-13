import * as actions from './counterActions';
import {takeEvery, put, delay, fork} from 'redux-saga/effects';

function* incrementCounterAsync() {
  yield delay(1000);
  yield put({type: actions.INCREMENT_COUNTER});
}

function* WatchIncrementCounterAsync() {
  yield takeEvery(actions.INCREMENT_COUNTER_REQUEST, incrementCounterAsync);
}

const counterSagas = [fork(WatchIncrementCounterAsync)];
export default counterSagas;
