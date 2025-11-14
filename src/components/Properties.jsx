import React from 'react';
import '../App.css';
import Hyderabad from "../assets/hyderabad.png";
import Banglore from "../assets/banglore.png";
import Mysore from "../assets/mysore.png";
import Chennai from "../assets/chennai.png";
import Nellore from "../assets/nellore.png";

function Properties() {
  return (
    <section className="properties" id="properties">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">AREAS ACROSS THE TOWN</p>
          <h2 className="section-title">Neighborhood Properties</h2>
          <p className="section-description">
            Proudly delivering quality developments across India’s fastest-growing cities.
          </p>
        </div>
        <div className="portfolio-grid">
          {[
            { img: Hyderabad, badge: 216, title: "Hyderabad" },
            { img: Banglore, badge: 141, title: "Banglore" },
            { img: Mysore, badge: 212, title: "Mysore" },
            { img: Chennai, badge: 183, title: "Chennai" },
            { img: Nellore, badge: 112, title: "Nellore" },
          ].map(({ img, badge, title }) => (
            <div key={title} className="property-card">
              <img src={img} alt={`Property ${title}`} />
              <div className="property-badge">{badge}</div>
              <div className="property-info">
                <h3>{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Properties;
