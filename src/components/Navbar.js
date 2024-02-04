// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <h2>TravalMedia.in</h2>
      </div>
      <div className="central-section">
        <Link to="/">Home</Link>
        <Link to="/detail">Detail</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
