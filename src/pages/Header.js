import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png'; 

const Header = () => {
  const location = useLocation(); // Get current route

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Nursery Store Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          </li>
          <li>
            <Link to="/category" className={location.pathname === "/category" ? "active" : ""}>Categories</Link>
          </li>
          <li>
            <Link to="/cart" className={location.pathname === "/cart" ? "active" : ""}>Cart</Link>
          </li>
          <li>
            <Link to="/contactus" className={location.pathname === "/contactus" ? "active" : ""}>Contact Us</Link>
          </li>
          <li>
            <Link to="/aboutus" className={location.pathname === "/aboutus" ? "active" : ""}>About Us</Link>
          </li>
          <li>
            <Link to="/subscription" className={location.pathname === "/subscription" ? "active" : ""}>Subscription</Link>
          </li>
          <li>
            <Link to="/faq" className={location.pathname === "/faq" ? "active" : ""}>FAQ</Link>
          </li>
          <li>
            <Link to="/aboutus1" className={location.pathname === "/aboutus1" ? "active" : ""}>About Us1</Link>
          </li>
          <li>
            <Link to="/track-order" className={location.pathname === "/track-order" ? "active" : ""}>Track Order</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
