import { userSagas } from "../components/user/userSagas";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

export const appSagaMiddleware = createSagaMiddleware();

export function* appSagas() {
  yield all([userSagas()]);
}
