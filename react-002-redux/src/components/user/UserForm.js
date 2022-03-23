import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./UserForm.module.css";
import { userActions, userSelector } from "./userSlice";

const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({
    firstName: null,
    lastName: null,
    email: null,
  });

  const dispatch = useDispatch();

  const pageMode = useSelector(userSelector.pageMode);
  const userSelected = useSelector(userSelector.userSelected);

  const handleOnClickCancel = () => {
    dispatch(userActions.setPageMode("list"));
  };

  const handleOnClickDelete = () => {
    dispatch(userActions.deleteUser(userSelected.id));
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      firstName: null,
      lastName: null,
      email: null,
    };

    if (firstName.length === 0) {
      isValid = false;
      errors.firstName = "First name is required";
    }

    if (lastName.length === 0) {
      isValid = false;
      errors.lastName = "Last name is required";
    }

    if (email.length === 0) {
      isValid = false;
      errors.email = "Email is required";
    }

    setErrors(errors);
    return isValid;
  };

  const handleOnClickCreate = () => {
    const isValid = validateForm();
    if (isValid) {
      dispatch(userActions.createUser({ firstName, lastName, email }));
    }
  };

  const handleOnClickEdit = () => {
    const isValid = validateForm();
    if (isValid) {
      dispatch(
        userActions.updateUser({
          id: userSelected.id,
          firstName,
          lastName,
          email,
        })
      );
    }
  };

  useEffect(() => {
    if (pageMode === "edit") {
      setFirstName(userSelected.firstName);
      setLastName(userSelected.lastName);
      setEmail(userSelected.email);
    } else if (pageMode === "create") {
      setFirstName("");
      setLastName("");
      setEmail("");
    }
  }, [pageMode, userSelected]);

  const isShow = pageMode !== "list";
  const title = pageMode === "create" ? "Create User" : "Edit User";

  if (!isShow) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span>{title}</span>
          <span className={styles.button__close} onClick={handleOnClickCancel}>
            x
          </span>
        </div>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="firstName" className={styles.formGroup__label}>
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={styles.formGroup__input}
            />
            {errors?.firstName && (
              <div className={styles.formGroup__error}>{errors.firstName}</div>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName" className={styles.formGroup__label}>
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={styles.formGroup__input}
            />
            {errors?.lastName && (
              <div className={styles.formGroup__error}>{errors.lastName}</div>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formGroup__label}>
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.formGroup__input}
            />
            {errors?.email && (
              <div className={styles.formGroup__error}>{errors.email}</div>
            )}
          </div>
        </form>
        <div className={styles.actions}>
          {pageMode === "create" && (
            <button
              className={styles.actions__button}
              onClick={handleOnClickCreate}
            >
              Create
            </button>
          )}

          {pageMode === "edit" && (
            <button
              className={styles.actions__button}
              onClick={handleOnClickEdit}
            >
              Edit
            </button>
          )}

          {pageMode === "edit" && (
            <button
              className={`${styles.actions__button} ${styles.actions__button_delete}`}
              onClick={handleOnClickDelete}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserForm;
