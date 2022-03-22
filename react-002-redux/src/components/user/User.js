import React from "react";
import styles from "./User.module.css";
import UserList from "./UserList";
const User = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>User Management</h3>
      <UserList></UserList>
    </div>
  );
};

export default User;
