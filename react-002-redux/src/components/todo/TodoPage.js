import React from "react";
import { useDispatch } from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styles from "./TodoPage.module.css";
import { todoActions } from "./todoStore";

const TodoPage = () => {
  const dispatch = useDispatch();
  const onClickCreate = () => {
    dispatch(todoActions.setMode("create"));
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3>Todo list </h3>
          <button onClick={onClickCreate} className={styles.button__add}>
            Create
          </button>
        </div>
        <TodoList />
        <TodoForm></TodoForm>
      </div>
    </div>
  );
};

export default TodoPage;
