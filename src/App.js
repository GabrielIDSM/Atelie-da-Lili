import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Component/Home";
import { Simulation } from "./Component/Simulation";

function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/simule" element={<Simulation/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;