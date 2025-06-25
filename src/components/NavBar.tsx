import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
// basic navbar component
const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorties
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
