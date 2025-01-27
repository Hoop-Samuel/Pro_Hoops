import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the main menu open/close
  const [activeMenu, setActiveMenu] = useState(null); // State to handle active submenus

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the main menu visibility
    if (menuOpen) {
      setActiveMenu(null); // Close submenus when the menu is closed
    }
  };

  const toggleSubMenu = (menuId) => {
    setActiveMenu((prevMenu) => (prevMenu === menuId ? null : menuId)); // Toggle submenu
  };

  // List of routes
  const routes = [
    { path: '/', name: 'Home' },
    { path: '/trainingprograms', name: 'Training Programs'},
    { path: '/meethtecoach', name: 'Meet the Coach' },
    { path: '/gearup', name: 'Gear up' },
    { path: '/photogallery', name: 'Photo Gallery' },
    { path: '/login', name: 'Sign In / Register' },
  ];

  return (
    <div className="hamburger-menu-container">
      <div className="menu-wrapper" onClick={toggleMenu}>
        <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className={`menu-list ${menuOpen ? 'active' : ''}`}>
        {/* Dynamically rendered routes */}
        {routes.map((route, index) => (
          <li
            key={index}
            className={`accordion-toggle ${activeMenu === route.name ? 'active' : ''}`}
            onClick={() => toggleSubMenu(route.name)}
          >
            <span className="icon-plus"></span>
            <Link to={route.path} onClick={() => setMenuOpen(false)}>{route.name}</Link> {/* Close menu on click */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
