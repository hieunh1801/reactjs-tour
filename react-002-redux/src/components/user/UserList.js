import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions, userSelector } from "./userSlice";
import styles from "./UserList.module.css";

const UserListItem = ({ user, onClickUser }) => {
  return (
    <div className={styles.userListItem} onClick={() => onClickUser(user)}>
      <span className={styles.userListItem__userName}>
        {user.id}. {user.firstName} {user.lastName}
      </span>
      {user.email}
    </div>
  );
};

const UserList = () => {
  const dispatch = useDispatch();

  const users = useSelector(userSelector.users);
  const loadMoreUsersStatus = useSelector(userSelector.loadMoreUsersStatus);
  const userSelected = useSelector(userSelector.userSelected);
  const onClickLoadMore = () => {
    dispatch(userActions.loadMoreUsers());
  };

  const handleOnClickUser = (user) => {
    dispatch(userActions.selectUser(user));
    dispatch(userActions.setPageMode("edit"));
  };

  return (
    <div className={styles.container}>
      {users?.map((user) => (
        <UserListItem
          key={user.id}
          user={user}
          onClickUser={handleOnClickUser}
          userSelected={userSelected}
        />
      ))}
      {loadMoreUsersStatus === "idle" ? (
        <div className={styles.button__load_more} onClick={onClickLoadMore}>
          Load more
        </div>
      ) : (
        <div className={styles.button__load_more}>Loading ...</div>
      )}
    </div>
  );
};

export default UserList;
