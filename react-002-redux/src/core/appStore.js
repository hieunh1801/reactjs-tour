import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../components/counter/counterSlice";
import { todoReducer } from "../components/todo/todoStore";
import { userReducer } from "../components/user/userSlice";
import { appSagaMiddleware, appSagas } from "./appSagas";

const appStore = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    user: userReducer,
  },
  middleware: [appSagaMiddleware],
});

appSagaMiddleware.run(appSagas);

export default appStore;
