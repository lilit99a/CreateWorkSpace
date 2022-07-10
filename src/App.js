import { useState } from "react";
import "./App.css";
import Header from "./header/index";
import CreateWorkSpace from "./createWorkSpace/index";
import { Routes, Route } from "react-router-dom";
import UsersData from "./usersApiData";

function App({ users }) {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<CreateWorkSpace />} />
        <Route path="/users" element={<UsersData />} />
      </Routes>
    </div>
  );
}

export default App;
