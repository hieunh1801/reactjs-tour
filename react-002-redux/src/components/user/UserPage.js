import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./UserPage.module.css";
import UserForm from "./UserForm";
import UserList from "./UserList";
import { userActions } from "./userSlice";

const UserPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.fetchUsers());
  }, [dispatch]);

  const onClickCreate = () => {
    dispatch(userActions.setPageMode("create"));
  };

  return (
    <div className={styles.container}>
      <UserList />
      <UserForm />
      <div className={styles.button__create} onClick={onClickCreate}>
        Create
      </div>
    </div>
  );
};

export default UserPage;
