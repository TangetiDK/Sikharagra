import React from 'react';
import Sikharagra_logo from '../assets/Sikharagra_logo.png';
import '../App.css';

function Header({ shadow }) {
  return (
    <header style={{ boxShadow: shadow ? '0 2px 20px rgba(0,0,0,0.2)' : '0 2px 10px rgba(0,0,0,0.1)' }}>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
        <div className="logo">
          <img src={Sikharagra_logo} alt="Sikharagra Logo" className="logo-img" />
        </div>
        <button className="contact-btn">Contact</button>
      </nav>
    </header>
  );
}

export default Header;
