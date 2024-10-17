import React from 'react';
import '../Header/Header.css';
import logo from '../Header/logo.png'
import { Link } from 'react-router-dom'
function Header({cartItems}) {
  return (
  <div className='container-fluid total-header'>
      <div className='container' id='header'>
      <div className=' row header-top '>
        <div className='header-socialIcons col-md-3 col-4'>
          <a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
          <a href="#"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
          <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        </div>

        <div className='header-logo  col-md-6 col-4 text-center'>
        <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>

        <div className='header-cartItems col-md-3 col-4'>
          <Link to={'/login'}><i className="fa fa-user-circle" aria-hidden="true"></i></Link>
          <Link to={'/cart'}><i className="fa fa-shopping-cart" aria-hidden="true"></i><sup>{cartItems.length}</sup></Link>
        </div>
      </div>

      <div className='row header-bottom'>
        <div className='col-md-12  header-bottom-nav'>
        <Link to="/">Home</Link>
        <Link to="/shops">Shop</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Header;
