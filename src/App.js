import { useState } from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create from "./Create";
import ContactDetails from "./ContactDetails";

function App() {

  return (
    <Router>
      <div className="App">
        <h1>Contact Manager</h1>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/create" element={<Create />}></Route>
          <Route exact path="/contact/:id" element={<ContactDetails />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
