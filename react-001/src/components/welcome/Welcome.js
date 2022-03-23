import React from "react";
import styles from "./Welcome.module.css";
const Welcome = ({ name }) => {
  return <div className={styles.container}>Welcome back: {name}</div>;
};

export default Welcome;
