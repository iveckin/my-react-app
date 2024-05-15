import React, { useState } from 'react';
import '../css/Header.css'; // Import the CSS file

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowSearch(false);  // Ensure that the search is hidden when showing login
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setShowLogin(false);  // Ensure that the login is hidden when showing search
  };

  return (
    <div className="header-wrapper">
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="/">Filmy</a></li>
          <li><a href="/serialy">Serialy</a></li>
          
        </ul>
        <ul className="nav-icons">
          <li onClick={toggleSearch}><i className="fa-solid fa-magnifying-glass"></i></li>
          <li onClick={toggleLogin}><i className="fa-solid fa-user"></i></li>
        </ul>
      </nav>
      {showSearch && (
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
      )}
      {showLogin && (
        <div className="login-box">
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
            <button type="submit">Reset</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Header;
