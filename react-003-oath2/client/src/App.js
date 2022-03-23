import React from "react";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import LoginPage from "./login/LoginPage";

const App = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
