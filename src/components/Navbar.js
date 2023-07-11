import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/" className="logo">
          <h3>Blogs Appliation</h3>
        </Link>
      </div>
      <div className="menu-link">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/blogs" className="link">
          All Blogs
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
      </div>
    </nav>
  );
}
