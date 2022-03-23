import React from "react";
import GoogleLogin from "react-google-login";
import styles from "./LoginPage.module.css";

const REACT_APP_GOOGLE_CLIENT_ID =
  "110446158473-m51f4lnkbdhicq52jg0qqtopkdugn5su.apps.googleusercontent.com";

const LoginPage = () => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    alert("Submitted");
  };

  const handleLogin = async (googleData) => {
    console.log(googleData);
    const res = await fetch("http://localhost:5000/api/v1/auth/google", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    // store returned user somehow
  };

  return (
    <div>
      <h1>Login</h1>
      <form className={styles.loginForm} onSubmit={handleOnSubmit}>
        <div className={styles.loginForm__group}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className={styles.loginForm__group}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className={styles.loginForm__actions}>
          <button type="submit">Login</button>
          <GoogleLogin
            clientId={REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
