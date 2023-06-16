import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="list">
        <Link to="/" className="list-item-1">
          Home
        </Link>
        <Link to="/wishlist" className="list-item-2">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
