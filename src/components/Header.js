import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </div>
        <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
          <li><a href="#">Home</a></li>
          <li 
            className="dropdown" 
            onClick={toggleDropdown}
          >
            <a href="">Product</a>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="#">Product 1</a></li>
                <li><a href="#">Product 2</a></li>
                <li><a href="#">Product 3</a></li>
              </ul>
            )}
          </li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
