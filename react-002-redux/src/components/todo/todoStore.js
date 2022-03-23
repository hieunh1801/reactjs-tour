import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [
      {
        id: 1,
        title: "Learn React",
        description: "Learn React Description",
        completed: false,
      },
      {
        id: 2,
        title: "Learn Redux",
        description: "Learn Redux Description",
        completed: false,
      },
      {
        id: 3,
        title: "Learn React Native",
        description: "Learn React Native Description",
        completed: false,
      },
    ],
    todoSelected: null,
    loadingStatus: "idle",
    mode: "list",
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    selectTodo: (state, action) => {
      state.todoSelected = action.payload;
    },
    setLoadingStatus: (state, action) => {
      state.loadingStatus = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setSelectTodo: (state, action) => {
      state.todoSelected = action.payload;
    },
    setTodoList: (state, action) => {
      state.todoList = action.payload;
    },
    updateTodo: (state, action) => {
      const todo = state.todoList.find((todo) => todo.id === action.payload.id);
      todo.title = action.payload.title;
      todo.description = action.payload.description;
      todo.completed = action.payload.completed;
    },
    createTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});
const {
  updateTodo,
  setTodoList,
  addTodo,
  removeTodo,
  selectTodo,
  setError,
  setLoadingStatus,
  setSelectTodo,
  setMode,
  deleteTodo,
  createTodo,
} = todoSlice.actions;

export const todoActions = {
  updateTodo,
  setTodoList,
  addTodo,
  removeTodo,
  selectTodo,
  setError,
  setLoadingStatus,
  setSelectTodo,
  setMode,
  deleteTodo,
  createTodo,
};

export const todoReducer = todoSlice.reducer;
export const todoSelector = {
  todoList: (state) => state.todo.todoList,
  todoSelected: (state) => state.todo.todoSelected,
  loadingStatus: (state) => state.todo.loadingStatus,
  error: (state) => state.todo.error,
  mode: (state) => state.todo.mode,
};
