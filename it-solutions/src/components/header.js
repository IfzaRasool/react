/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

const Header = () => (
  <div>
    <header className="header">
      <a href="#" target="_blank" className="logo">ACTXIS</a>
      <nav className="navbar">
        <ul className="navbar-list">
          <li><a href="#" className="navbar-link">Home</a></li>
          <li><a href="#" className="navbar-link">About</a></li>
          <li><a href="#" className="navbar-link">Services</a></li>
          <li><a href="#" className="navbar-link">Pages</a></li>
          <li><a href="#" className="navbar-link">News</a></li>
          <li><a href="#" className="navbar-link">Contact</a></li>
          {/* <li><a href="#" className="navbar-link"><ion-icon name="search-outline"/></a></li> */}
          <li><a href="#" className="navbar-btn">Registered/Login</a></li>
        </ul>
      </nav>

      <div className="mobile-navbar-btn">
        <ion-icon name="menu" class="mobile-nav-icon" />
        <ion-icon name="close" class="mobile-nav-icon" />
      </div>
    </header>
  </div>
);

export default Header;
