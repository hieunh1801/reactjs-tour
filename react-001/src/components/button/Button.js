import React from "react";
import styles from "./Button.module.css";

const Button = ({ title, onClick, disabled }) => {
  return (
    <button className={styles.container} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
