import React from "react";
import Navbar from "./components/nav-bar/Navbar";
import TodoPage from "./components/todo/TodoPage";
import Counter from "./components/counter/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "./components/user/UserPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route path="" element={<Counter />} />
          <Route path="counter" element={<Counter />} />
          <Route path="users" element={<UserPage />} />
          <Route path="todos" element={<TodoPage />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
