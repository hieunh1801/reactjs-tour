import React from "react";
import styles from "./TodoList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { todoActions, todoSelector } from "./todoStore";

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(todoActions.selectTodo(todo));
    dispatch(todoActions.setMode("edit"));
  };

  const onClickDelete = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(todoActions.deleteTodo(todo.id));
  };

  return (
    <div className={styles.todoListItem} onClick={onClick}>
      <div className={styles.todoListItem__title}>{todo.title}</div>
      <div className={styles.todoListItem__description}>{todo.description}</div>
      <div
        className={styles.todoListItem__button__delete}
        onClick={onClickDelete}
      >
        Delete
      </div>
    </div>
  );
};

const TodoList = () => {
  const todoList = useSelector(todoSelector.todoList);
  console.log(todoList);
  return (
    <div className={styles.container}>
      {todoList?.map((todo) => (
        <TodoListItem todo={todo} key={todo?.id?.toString()} />
      ))}
    </div>
  );
};

export default TodoList;
