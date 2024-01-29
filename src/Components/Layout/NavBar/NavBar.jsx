// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css';
import { FaHeart, FaShoppingCart, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Shoe'sGear</Link>
        <div className={`navbar-menu ${showMenu ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><Link to="/" className="navbar-link">Home</Link></li>
            <li><Link to="/products" className="navbar-link">Products</Link></li>
            <li><Link to="/about" className="navbar-link">About Us</Link></li>
            <li><Link to="/contact" className="navbar-link">Contact</Link></li>
          </ul>
          </div>
          <div className="navbar-icons" >
            <Link style={{marginLeft:13 , marginRight:13}} to="/favorites" className="navbar-link"><FaHeart /></Link>
            <Link style={{marginLeft:13 , marginRight:13}} to="/cart" className="navbar-link"><FaShoppingCart /></Link>
        </div>
        <div className="toggle-menu" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
