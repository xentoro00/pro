// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="left-nav">
        <a href="/">
          <img src="imgs/e-banking-favicon-black.png" alt="logo" width="300px" height="200px" />
        </a>
      </div>
      <div className="middle-nav">
        <ul>
          <li>Home</li>
          <li>Loans</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Pages</li>
          <li>Blog</li>
        </ul>
      </div>

      <div className="right-nav">
        <ul>
          <li id="ap">Apply Now</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
