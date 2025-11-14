import React from 'react';
import '../App.css';
import Gallery1 from '../assets/Gallery1.png';
import Gallery2 from '../assets/Gallery2.png';
import Gallery3 from '../assets/Gallery3.png';
import Gallery4 from '../assets/Gallery4.png';

function Gallery() {
  const images = [Gallery1, Gallery2, Gallery3, Gallery4];

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Gallery</h2>
          <p className="section-description">
          Explore stunning visuals from our premium real-estate developments, luxury plots, and happy communities across Hyderabad.
        </p>
        </div>
        <div className="gallery-grid">
          {images.map((imgSrc, index) => (
            <div key={index} className="gallery-item">
              <img src={imgSrc} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button className="gallery-btn">View Full Gallery</button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;

