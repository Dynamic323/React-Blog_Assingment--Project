import React from "react";
import Blog from "./Blog";
import EducationLanding from "./LandingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/lg" element={<EducationLanding />} />
      </Routes>
    </div>
  );
}

export default App;
