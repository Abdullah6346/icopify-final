import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid d-flex justify-content-between custom-navbar">
        <Link className="navbar-brand" to="/">
          <img className=" logo " src="/logo.webp" alt="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item custom-nav-link">
              <Link className="nav-link active" aria-current="page" to="/">
                Link Building
              </Link>
            </li>
            <li className="nav-item custom-nav-link">
              <Link className="nav-link" to="/digital">
                Digital PR & SEO
              </Link>
            </li>
            <li className="nav-item custom-nav-link">
              <Link className="nav-link" to="/fix">
                Fix & Design Site
              </Link>
            </li>
            <li className="nav-item custom-nav-link">
              <Link className="nav-link" to="/content-writing">
                Content Writing
              </Link>
            </li>
            <li className="nav-item custom-nav-link">
              <Link className="nav-link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="nav-item custom-nav-link">
              <Link className="nav-link" to="/signup">
                SIGN UP
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
