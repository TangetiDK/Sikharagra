import React from 'react';
import { FaBuilding, FaAward, FaClock, FaUsers } from 'react-icons/fa';
import '../App.css';
import Ellipse from '../assets/why_choose_Ellipse.svg';

function WhyChooseUs() {
  return (
    <section className="why-choose">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Sikharagra Developers</h2>
          <p className="section-description"> Building trust through excellence, transparency, and timely delivery.</p>
        </div>
        <div className="ellipse-container">
          <img src={Ellipse} alt="Ellipse" />
        </div>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon"><FaBuilding size={40} color='#fffefe' /></div>
            <h3>Trust</h3>
            <p> 12+ years of delivering on promises with transparent partnerships.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FaAward size={40} color='#fffefe' /></div>
            <h3>Quality</h3>
            <p>Premium materials and world-class construction standards.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FaClock size={40} color='#fffefe' /></div>
            <h3>Transparency</h3>
            <p>Clear pricing, honest communication — no hidden costs.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FaUsers size={40} color='#fffefe' /></div>
            <h3>Timely Delivery</h3>
            <p>100% on-time project completion track record.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
