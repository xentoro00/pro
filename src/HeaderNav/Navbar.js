// Navbar.js
import React, { useEffect } from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="left-nav">
        <a href="/">
          <img src="imgs/e-banking-favicon-black.png" alt="logo" width="250px" height="200px" />
        </a>
      </div>
      <div className="middle-nav">
        <ul>
        <li><a className="hoverable" href="#">Home</a></li>
      <li><a className="hoverable" href="#">Loans</a></li>
      <li><a className="hoverable" href="#">About Us</a></li>
      <li><a className="hoverable" href="#">Services</a></li>
      <li><a className="hoverable" href="#">Pages</a></li>
      <li><a className="hoverable" href="#">Blog</a></li>
        </ul>
      </div>

      <div className="right-nav">
        <div>
            <a href="#" class="btn yellow">
                <span>Apply Now</span>
                <ion-icon name="arrow-forward"></ion-icon>
            </a>
        </div>
    
      </div>
    </nav>
  );
}

export default Navbar;
