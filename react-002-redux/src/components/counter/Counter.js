import { useDispatch, useSelector } from "react-redux";
import { counterActions, counterSelector } from "./counterSlice";
import styles from "./Counter.module.css";

const Counter = () => {
  const count = useSelector(counterSelector.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div>{count}</div>
      <div
        className={styles.button}
        onClick={() => {
          dispatch(counterActions.increment());
        }}
      >
        Increment
      </div>
      <div
        className={styles.button}
        onClick={() => {
          dispatch(counterActions.decrement());
        }}
      >
        Decrement
      </div>
      <div
        className={styles.button}
        onClick={() => {
          dispatch(counterActions.incrementByAmount(5));
        }}
      >
        Increment +5
      </div>
    </div>
  );
};

export default Counter;
