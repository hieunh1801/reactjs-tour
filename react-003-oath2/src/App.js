import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
