// saga
import { call, put, takeLatest, select } from "redux-saga/effects";
import userAPI from "./userAPI";
import { userActions, userSelector } from "./userSlice";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* fetchUserSaga() {
  try {
    const pagination = yield select(userSelector.pagination);
    const queryParams = { page: pagination.page, perPage: pagination.perPage };
    const response = yield call(userAPI.getUsers, queryParams);
    const data = yield response.data;
    const total = response.total;
    yield put(userActions.fetchUsersSuccess(data));
    yield put(userActions.setTotal(total));
  } catch (error) {
    yield put(userActions.fetchUsersFailure(error?.message));
  }
}

function* loadMoreUserSaga() {
  try {
    const pagination = yield select(userSelector.pagination);
    const queryParams = { page: pagination.page, perPage: pagination.perPage };
    const response = yield call(userAPI.getUsers, queryParams);
    const data = yield response.data;
    const total = response.total;
    yield delay(1000);
    yield put(userActions.loadMoreUsersSuccess(data));
    yield put(userActions.setTotal(total));
  } catch (error) {
    yield put(userActions.loadMoreUsersFailure(error?.message));
  }
}

function* fetchUserByIdSaga({ payload }) {
  try {
    const response = yield call(userAPI.getUserById, payload);
    const data = yield response.data;
    yield put(userActions.fetchUserByIdSuccess(data));
  } catch (error) {
    yield put(userActions.fetchUserByIdFailure(error?.message));
  }
}

function* deleteUserSaga({ payload }) {
  try {
    yield call(userAPI.deleteUser, payload);
    yield put(userActions.deleteUserSuccess(payload));
  } catch (error) {
    yield put(userActions.deleteUserFailure(error?.message));
  }
}

function* updateUserSaga({ payload }) {
  try {
    const data = yield call(userAPI.updateUser, payload);
    yield put(userActions.updateUserSuccess(data));
  } catch (error) {
    yield put(userActions.updateUserFailure(error?.message));
  }
}

function* createUserSaga({ payload }) {
  try {
    const data = yield call(userAPI.createUser, payload);
    yield put(userActions.createUserSuccess(data));
  } catch (error) {
    yield put(userActions.createUserFailure(error?.message));
  }
}

export function* userSagas() {
  yield takeLatest(userActions.fetchUsers.type, fetchUserSaga);
  yield takeLatest(userActions.loadMoreUsers.type, loadMoreUserSaga);
  yield takeLatest(userActions.deleteUser.type, deleteUserSaga);
  yield takeLatest(userActions.updateUser.type, updateUserSaga);
  yield takeLatest(userActions.createUser.type, createUserSaga);
}
