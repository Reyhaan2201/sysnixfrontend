import React, { useState } from "react";
import "./Header2.css";
import { Link } from "react-router-dom";

function Header2() {
  const [activeLink, setActiveLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOnClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="container-res">
        <div className="responsive">
          <button className="menu-toggle" onClick={toggleMenu}>
            &#9776;
          </button>
          <ul className={`responsive-navbar ${isMenuOpen ? "open" : ""}`}>
            <li className="responsive-li">
              <Link
                to="/"
                onClick={() => handleOnClick('home')}
                style={{ color: activeLink === 'home' ? '#ef1923' : 'black' }}
              >
                Home
              </Link>
            </li>
            <li className="responsive-li">
              <Link
                to="/Service"
                onClick={() => handleOnClick('services')}
                style={{ color: activeLink === 'services' ? '#ef1923' : 'black' }}
              >
                Our Services
              </Link>
            </li>
            <li className="responsive-li">
              <Link
                to="/products"
                onClick={() => handleOnClick('products')}
                style={{ color: activeLink === 'products' ? '#ef1923' : 'black' }}
              >
                Products
              </Link>
            </li>
            <li className="responsive-li">
              <Link
                to="/about"
                onClick={() => handleOnClick('about')}
                style={{ color: activeLink === 'about' ? '#ef1923' : 'black' }}
              >
                About Us
              </Link>
            </li>
            <li className="responsive-li">
              <Link
                to="/career"
                onClick={() => handleOnClick('career')}
                style={{ color: activeLink === 'career' ? '#ef1923' : 'black' }}
              >
                Career
              </Link>
            </li>
            <li className="responsive-li">
              <Link
                to="/contact"
                onClick={() => handleOnClick('contact')}
                style={{ color: activeLink === 'contact' ? '#ef1923' : 'black' }}
              >
                Contact
              </Link>
            </li>
            <li className="responsive-li">
              <Link
                to="/login"
                onClick={() => handleOnClick('login')}
                style={{ color: activeLink === 'login' ? '#ef1923' : 'black' }}
              >
                Support &amp; Downloads
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header2;
