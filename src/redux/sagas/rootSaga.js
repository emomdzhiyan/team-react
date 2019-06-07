import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { SEND_INVITE, ACTIVATE_USER, GET_USERS } from '../constants';
import {
  setTeamList,
  setRedirection,
  clearRedirection,
  addSuccess,
  clearSuccess,
  addError,
  clearError
} from '../actions';

const { REACT_APP_SERVER_URL } = process.env;

function* rootSaga() {
  yield takeEvery(SEND_INVITE, sendInviteAsync);
  yield takeEvery(ACTIVATE_USER, activateUserAsync);
  yield takeEvery(GET_USERS, getUsersAsync);
}

function* sendInviteAsync(action) {
  try {
    const message = yield call(() => axios.post(`${REACT_APP_SERVER_URL}/invitations`, action.payload));
    console.log(message);
  } catch (error) {
    console.log('error -->', error);
    yield put(setRedirection());
    yield put(clearRedirection());
    yield put(addError('Something went wrong'));
    yield put(clearError());
  }
}

function* activateUserAsync(action) {
  try {
    const message = yield call(() => axios.get(`${REACT_APP_SERVER_URL}/invitations/${action.payload}`));
    console.log(message);
    yield put(setTeamList(message));
    yield put(setRedirection());
    yield put(clearRedirection());
    yield put(addSuccess('Successfully invited to the team'));
    yield put(clearSuccess());
  } catch (error) {
    console.log('error -->', error);
    yield put(setRedirection());
    yield put(clearRedirection());
    yield put(addError('Something went wrong'));
    yield put(clearError());
  }
}

function* getUsersAsync() {
  try {
    const message = yield call(() => axios.get(`${REACT_APP_SERVER_URL}/users`));
    yield put(setTeamList(message));
  } catch (error) {
    console.log('error -->', error);
    yield put(setRedirection());
    yield put(clearRedirection());
    yield put(addError('Something went wrong'));
    yield put(clearError());
  }
}

export default rootSaga;
