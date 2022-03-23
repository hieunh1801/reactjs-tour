import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    userSelected: null,
    status: "idle",
    error: null,
    total: 0,
    pagination: {
      page: 1,
      perPage: 10,
    },
    loadMoreUsersStatus: "idle",
    pageMode: "list", // list, create, edit
  },
  reducers: {
    fetchUsers: (state) => {
      state.status = "pending";
    },
    fetchUsersSuccess: (state, actions) => {
      state.status = "idle";
      state.users = actions.payload;
    },
    fetchUsersFailure: (state, actions) => {
      state.status = "idle";
      state.error = actions.payload;
    },
    createUser: (state, actions) => {
      state.status = "pending";
    },
    createUserSuccess: (state, actions) => {
      state.status = "idle";
      state.pageMode = "list";
      state.users = [actions.payload, ...state.users];
    },
    createUserFailure: (state, actions) => {
      state.status = "idle";
      state.error = actions.payload;
    },
    updateUser: (state, actions) => {
      state.status = "pending";
    },
    updateUserSuccess: (state, actions) => {
      state.status = "idle";
      state.users = state.users.map((user) =>
        user.id === actions.payload.id ? actions.payload : user
      );
    },
    updateUserFailure: (state, actions) => {
      state.status = "idle";
      state.error = actions.payload;
    },
    deleteUser: (state, actions) => {
      state.status = "pending";
    },
    deleteUserSuccess: (state, actions) => {
      state.status = "idle";
      state.users = state.users.filter((user) => user.id !== actions?.payload);
      state.pageMode = "list";
    },
    deleteUserFailure: (state, actions) => {
      state.status = "idle";
      state.error = actions.payload;
    },
    selectUser: (state, actions) => {
      state.userSelected = actions.payload;
    },
    unselectUser: (state) => {
      state.userSelected = null;
    },
    removeUserSelected: (state, actions) => {
      state.userSelected = null;
    },
    setPagination: (state, actions) => {
      state.pagination = actions.payload;
    },
    setTotal: (state, actions) => {
      state.total = actions.payload;
    },
    loadMoreUsers: (state) => {
      state.pagination.page += 1;
      state.loadMoreUsersStatus = "pending";
    },
    loadMoreUsersSuccess: (state, actions) => {
      state.users = [...state.users, ...actions.payload];
      state.loadMoreUsersStatus = "idle";
    },
    loadMoreUsersFailure: (state, actions) => {
      state.error = actions.payload;
      state.loadMoreUsersStatus = "idle";
    },
    setPageMode: (state, actions) => {
      state.pageMode = actions.payload;
    },
  },
});

export const userReducer = userSlice.reducer;

export const userActions = { ...userSlice.actions };

export const userSelector = {
  users: (state) => state.user.users,
  userSelected: (state) => state.user.userSelected,
  status: (state) => state.user.status,
  error: (state) => state.user.error,
  pagination: (state) => state.user.pagination,
  page: (state) => state.user.pagination?.page,
  perPage: (state) => state.user.pagination?.perPage,
  total: (state) => state.user.total,
  loadMoreUsersStatus: (state) => state.user.loadMoreUsersStatus,
  pageMode: (state) => state.user.pageMode,
};
