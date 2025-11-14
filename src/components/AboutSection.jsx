import React from 'react';
import '../App.css';
import estateStamp from '../assets/realstatestamp.svg';

function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <p className="section-subtitle">WHO ARE WE</p>
            <h2 className="section-title">About Sikharagra Group</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              With over two decades of expertise in the real estate industry, Sikharagra Group has established itself as a trusted name in premium property development. We are dedicated to crafting exceptional residential and commercial spaces that redefine modern living in Hyderabad.
            </p>
            <p>
              Our commitment to quality, innovation, and customer satisfaction has made us one of the leading developers in the region. With an eye for detail and passion for design, we create spaces that inspire excellence.
            </p>
            <div className="stats-container">
              <div className="stat-box">
                <div className="stat-number">12+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Happy Families</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">100%</div>
                <div className="stat-label">Customer Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="about-images">
            <div className="about-image-main">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&h=500&fit=crop" alt="About Us Main" />
            </div>
            <div className="about-image-grid">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop" alt="Project 1" />
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&h=200&fit=crop" alt="Project 2" />
            </div>
            <img src={estateStamp} alt="real estate" className="real_estate" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
