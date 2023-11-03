import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-brand">My Landing Page</div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    );
  };

  export default Navbar;