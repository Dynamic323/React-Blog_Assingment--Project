import React from "react";
import Blog from "./Blog";
import EducationLanding from "./LandingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <EducationLanding />} />
        <Route path="/lg" element={<Blog /> } />
      </Routes>
    </div>
  );
}

export default App;
