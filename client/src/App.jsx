import React from "react";
import { Routes, Route } from "react-router-dom";
import AddNewData from "./pages/addNewData/AddNewData";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddNewData />} />
      </Routes>
    </div>
  );
}

export default App;
