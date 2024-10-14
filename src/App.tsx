import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Auth from "./Pages/Auth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
