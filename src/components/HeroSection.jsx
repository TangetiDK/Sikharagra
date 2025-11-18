import React from 'react';
import { FaPlay, FaCity } from 'react-icons/fa';
import '../App.css';

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <p className="hero-tagline"> REAL ESTATE | HMDA & RERA APPROVED PROJECTS</p>
        <h1>Building Dreams, Creating Legacies</h1>
        <p className="hero-subtitle">Premium residential and commercial developments by Sikharagra Group redefining modern living across Hyderabad.</p>
        <p className="hero-subtitle" style={{  color: "#555" }}>
          Explore our signature project — RPL County, Kothur, offering premium plots starting at ₹26,000/Sq.Yd.
        </p>

        <div className="hero-image" onClick={() => alert('Video player would open here')} style={{ cursor: 'pointer' }}>
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&h=400&fit=crop" alt="Luxury Interior" />
          <div className="play-button">
            <FaPlay />
          </div>
        </div>

        <div className="hero-badges">
          <div className="badge">
            <div className="avatar-stack">
              <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=64&h=64&fit=crop" alt="a1" />
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop" alt="a2" />
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop" alt="a3" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop" alt="a4" />
            </div>
            <span><strong>72k+</strong> Happy Customers</span>
          </div>
          <div className="badge">
            <span className="icon"><FaCity /></span>
            <span><strong>200+</strong> New Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
