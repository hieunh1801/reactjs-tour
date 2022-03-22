import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./components/counter/counterSlice";
import styles from "./App.module.css";
import Counter from "./components/counter/Counter";
import User from "./components/user/User";

const App = () => {
  return <User />;
};

export default App;
