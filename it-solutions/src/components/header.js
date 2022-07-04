/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

const Header = () => (
  <div>
    <header className="header">
      <a href="#" target="_blank">Title</a>
      <nav className="navbar">
        <ul className="navbar-list">
          <li><a href="#" className="navbarlink">Home</a></li>
          <li><a href="#" className="navbarlink">About</a></li>
          <li><a href="#" className="navbarlink">Services</a></li>
          <li><a href="#" className="navbarlink">Pages</a></li>
          <li><a href="#" className="navbarlink">News</a></li>
          <li><a href="#" className="navbarlink">Contact</a></li>
          <li><a href="#" className="navbarlink"><ion-icon name="search-outline" /></a></li>
        </ul>
      </nav>

      <div className="mobile-navbar-btn">
        <ion-icon name="menu-outline" className="mobile-nav-icon" />
        <ion-icon name="close-outline" className="mobile-nav-icon" />
      </div>
    </header>
  </div>
);

export default Header;
