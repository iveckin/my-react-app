// Header.jsx

import React from 'react';
import '../css/Header.css'; // Import the CSS file

function Header() {
  return (
    <div className="header-wrapper">
      <nav className="nav">

        <ul>
          <li><a class="logo"><span>kukni</span>.si</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
