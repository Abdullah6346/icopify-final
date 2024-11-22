import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital" element={<h1>Digital PR & SEO Page</h1>} />
        <Route path="/fix" element={<h1>Fix & Design Site Page</h1>} />
        <Route
          path="/content-writing"
          element={<h1>Content Writing Page</h1>}
        />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/signup" element={<h1>Sign Up Page</h1>} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
};

export default AppRoutes;
