import React from "react";
import Blog from "./Blog";
import EducationLanding from "./LandingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Blog />  } />
      </Routes>
    </div>
        // <Route path="/lg" element={} />
  );
}

export default App;
