import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TodoForm.module.css";
import { todoActions, todoSelector } from "./todoStore";

let TodoForm = ({ handleSubmit, ...props }) => {
  const mode = useSelector(todoSelector.mode);
  const todoSelected = useSelector(todoSelector.todoSelected);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updateTodo = (event) => {
    event.preventDefault();
    const mTodo = {
      id: todoSelected.id,
      title: title,
      description: description,
      completed: todoSelected.completed,
    };
    dispatch(todoActions.updateTodo(mTodo));
    dispatch(todoActions.setMode("list"));
  };

  const createTodo = (event) => {
    event.preventDefault();
    const mTodo = {
      id: new Date().getTime(),
      title: title,
      description: description,
      completed: false,
    };
    dispatch(todoActions.createTodo(mTodo));
    dispatch(todoActions.setMode("list"));
  };

  const deleteTodo = (event) => {
    event.preventDefault();
    dispatch(todoActions.deleteTodo(todoSelected.id));
    dispatch(todoActions.setMode("list"));
  };

  const onClickCancel = (event) => {
    event.preventDefault();
    dispatch(todoActions.setSelectTodo(null));
    dispatch(todoActions.setMode("list"));
  };

  useEffect(() => {
    if (todoSelected && mode === "edit") {
      setTitle(todoSelected.title);
      setDescription(todoSelected.description);
    }
  }, [todoSelected]);

  useEffect(() => {
    if (mode === "create") {
      setTitle("");
      setDescription("");
    }
  }, [mode]);

  if (mode === "create" || mode === "edit") {
    return (
      <div className={styles.container}>
        <form className={styles.form}>
          <label htmlFor="firstName" className={styles.form__label}>
            Title
          </label>
          <input
            type="text"
            className={styles.form__input}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <label htmlFor="lastName" className={styles.form__label}>
            Description
          </label>
          <input
            type="text"
            className={styles.form__input}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <div className={styles.form__actions}>
            {mode === "create" && (
              <button
                type="submit"
                className={styles.form__button}
                onClick={createTodo}
              >
                Create
              </button>
            )}

            {mode === "edit" && (
              <button
                type="submit"
                className={styles.form__button}
                onClick={updateTodo}
              >
                Update
              </button>
            )}

            {mode === "edit" && (
              <button
                type="submit"
                className={styles.form__button}
                onClick={deleteTodo}
              >
                Delete
              </button>
            )}

            <button
              type="reset"
              className={styles.form__button}
              onClick={onClickCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return null;
  }
};

export default TodoForm;
