import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logoname from '../Namelogo/Logoname';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [open, setopen] = useState(true);
 

  
  const handleOnClick = (link) => {
    setActiveLink(link);
  };

  const handleButtonClick = () => {
    if(open === true){
      setopen(false)
    }
    else{
      setopen(true)
    }
  }



  return (
    <>
    <div className="site-container">
      {/* Header */}
      <header className="clearfix">
        {/* Top Bar */}
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <ul className="contact-us" style={{position:"relative",top: "14px"}}>
                  <li>
                    <a href="/" >
                      <i className="fa fa-phone" aria-hidden="true" />
                      +91-7466076666
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="contact-us contact-us-right">
                  <li>
                    <a href="/" >
                      <i className="fa fa-envelope" aria-hidden="true" />
                      info@sysnixautomation.com
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.co.in/maps/@28.9800407,79.3975113,15z?hl=en">
                      <i className="fa fa-map-marker" aria-hidden="true" />
                      Rudrapur, UK
                    </a>
                  </li>
                  {/* login form */}
                  <li>
                  <button type="button" className='login_button' onClick={handleButtonClick} id='login_button'>LOGIN</button>
                  {!open ? (
                           <div className="login_op" id='login_op'>
                           <Link className='login_selection' to="/user">user</Link>
                           <Link className='login_selection' to="/admin" >admin</Link>
                        </div>
                  ): null}
                 
                  </li>
                  <li>
                 <Logoname/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Top Bar */}
        {/* Menu Bar Navigation */}
        <div className="menubar" style={{paddingBottom: "10px"}}>
          <div className="container">
            <div className="navbar">
              {/* Navbar Header */}
              <div className="navbar-header">
                <Link className="navbar-brand clearfix" to="/" style={{ marginTop: '0px' }}>
                  <img alt="logo" src="assets/img/logoo.jpg" />
                </Link>
              </div>
              {/* End Navbar Header */}
             
         
            
              {/* Navigation */}
              <div className="navbar-collapse collapse navbar-right">
                <ul className="navbar-nav nav">
                  <li>
                    <Link
                      to="/"
                   
                      onClick={() => handleOnClick('home')}
                      style={{ color: activeLink === 'home' ? '#ef1923' : 'black' }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Service"
                   
                      onClick={() => handleOnClick('services')}
                      style={{ color: activeLink === 'services' ? '#ef1923' : 'black' }}
                    >
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products"
                   
                      onClick={() => handleOnClick('products')}
                      style={{ color: activeLink === 'products' ? '#ef1923' : 'black' }}
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                   
                      onClick={() => handleOnClick('about')}
                      style={{ color: activeLink === 'about' ? '#ef1923' : 'black' }}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/career"
                   
                      onClick={() => handleOnClick('career')}
                      style={{ color: activeLink === 'career' ? '#ef1923' : 'black' }}
                    >
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                   
                      onClick={() => handleOnClick('contact')}
                      style={{ color: activeLink === 'contact' ? '#ef1923' : 'black' }}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
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
              {/* End Navigation */}
            </div>
          </div>
        </div>
      
         
      </header>
      {/* End Header */}
      
    </div>
    </>
  );
};

export default Header;
