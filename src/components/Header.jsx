// Header.jsx

import React from 'react';
import '../css/Header.css'; // Import the CSS file

function Header() {
  return (
    <div className="header-wrapper">
      <nav className="nav">
        <ul>
          <li><a href="/">Filmy</a></li>
          <li><a href="/serialy">Serialy</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
