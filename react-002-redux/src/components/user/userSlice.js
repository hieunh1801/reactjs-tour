import { createAction, createSlice } from "@reduxjs/toolkit";

import { call, put, takeLatest } from "redux-saga/effects";
import userAPI from "./userAPI";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    userSelected: null,
    status: "idle",
    error: null,
  },

  reducers: {
    fetchUsers: (state) => {
      state.status = "pending";
    },
    fetchUsersSuccess: (state, actions) => {
      state.users = actions.payload;
    },
    fetchUsersFailure: (state, actions) => {
      state.error = actions.payload;
    },
  },
});

const { fetchUsers, fetchUsersSuccess, fetchUsersFailure } = userSlice.actions;

const userReducer = userSlice.reducer;

// saga
export const fetchUserAsync = createAction("user/fetchUserAsync");
function* fetchUserSaga() {
  try {
    const data = yield call(userAPI.getUser);
    yield put(fetchUsersSuccess(data));
  } catch (error) {
    yield put(fetchUsersFailure(error));
  }
}

function* userSagas() {
  yield takeLatest(fetchUserAsync.type, fetchUserSaga);
}

export {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,
  userSagas,
  userReducer,
};
