import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Callback from "./screens/Callback/Callback";
import Home from "./screens/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/universal-verifier" element={<Home />} />
        <Route path="/universal-verifier/callback" element={<Callback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
