import React, { useEffect } from "react";
import userAPI from "./userAPI";

const UserListItem = ({ user }) => {
  return <div>{user.id}</div>;
};

const UserList = () => {
  const loadUser = () => {
    userAPI.getUsers().then((response) => console.log(response));
  };
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div>
      <div>This is user list</div>
    </div>
  );
};

export default UserList;
