import React from 'react';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    alert('Submitted');
  }
  return (
    <div>
      <h1>Login</h1>
      <form className={styles.loginForm} onSubmit={handleOnSubmit}>
        <div className={styles.loginForm__group}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username"/>
        </div>
        <div className={styles.loginForm__group}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password"/>
        </div>
        <div className={styles.loginForm__actions}>
          <button type="submit">Login</button>
          <button type="button">Login with Google</button>
        </div>
      </form>
    </div>
  );
};


export default LoginPage;
