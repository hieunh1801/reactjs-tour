import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../components/counter/counterSlice";

const store = configureStore({
  reducer: {
    counterReducer: counterReducer,
  },
  
});

export default store;
