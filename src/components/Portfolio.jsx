import React from 'react';
import '../App.css';

import RplBrochure from '../assets/brochues/rplCounty.pdf';
import PsrBrochure from '../assets/brochues/PsrLayout.pdf';
import NatureCityBrochure from '../assets/brochues/natureCity.pdf';

function Portfolio() {
  const portfolioItems = [
    {
      img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop',
      alt: 'Luxury Villas',
      title: 'RPL County',
      status: 'Completed - 2023',
      brochure: RplBrochure
    },
    {
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop',
      alt: 'Commercial',
      title: 'PSR Layout',
      status: 'Completed - 2022',
      brochure: PsrBrochure
    },
    {
      img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=250&fit=crop',
      alt: 'Apartments',
      title: 'Nature City',
      status: 'Under Construction',
      brochure: NatureCityBrochure
    }
  ];

  return (
    <section className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-description">
            Explore our completed and ongoing premium developments designed to elevate modern living across Hyderabad and beyond.
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map(({ img, alt, title, status, brochure }) => (
            <div key={title} className="portfolio-item">
              <img src={img} alt={alt} />
              <div className="portfolio-overlay">
                <h3>{title}</h3>
                <p>{status}</p>
                <a href={brochure} download={`${title}_Brochure.pdf`} className="download-btn">
                  Download Brochure
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
