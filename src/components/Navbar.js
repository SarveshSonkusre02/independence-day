import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import your CSS styles

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Independence Day
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/history" className="navbar-link">History</Link>
          </li>
          <li className="navbar-item">
            <Link to="/present" className="navbar-link">Present</Link>
          </li>
          <li className="navbar-item">
            <Link to="/future" className="navbar-link">Future</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
